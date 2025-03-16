//
//
"use client";
//
import Cart from "./Cart";
import Link from "next/link";
import Image from "next/image";
import React, { useState ,useEffect, useContext } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../src/components/ui/button";
import { getUserCartData } from "../redux/cartDataSlice";
import { CartUpdateContext } from "../_context/CartUpdateContext";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Popover , PopoverContent , PopoverTrigger} from "@/components/ui/popover";



export default function Header() {
  const dispatch = useDispatch();
  const { isSignedIn ,user } = useUser();
  //----------------//
  const cart = useSelector((state) => state);
  const itemCount = cart?.cartData?.userCarts;
  // console.log(itemCount);
  
  //----------------//
  const { updateCart } = useContext(CartUpdateContext);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    if (user) {
      dispatch(getUserCartData(user.primaryEmailAddress.emailAddress));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (itemCount) {
      setCartItems(itemCount);
    }
  }, [itemCount]);
  useEffect(() => {
    if (updateCart) {
      dispatch(getUserCartData(user?.primaryEmailAddress?.emailAddress)); 
    }
  }, [updateCart, dispatch, user]);
    // console.log("cartItems", cartItems);

  //----------------//
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-12 h-12",
      userButtonPopoverCard: "bg-red-100",
      userButtonPopoverActionButton: "text-primary",
    },
  };
  return (
    <header className="bg-white border-b py-2">
      <div className="container">
        <div className="flex md:h-16 h-12 items-center justify-between md:gap-24 gap:10">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/?category=all">
              <Image
                className="lg:w-40 lg:h-12 md:w-36 md:h-10 w-32 h-8"
                src="/logo.png"
                alt="foodie cart logo"
                width={160}
                height={80}
              />
            </Link>
          </div>
          <div className="w-[40vw] hidden md:block">
            <form className="w-full">
              <div className="border border-primary ps-4 sm:flex sm:items-center sm:gap-4 rounded-xl">
                <input
                  type="text"
                  placeholder="Type to search"
                  className="w-full border-none focus:outline-none focus:ring-transparent sm:text-sm"
                />
                <button className="mt-1  w-full bg-primary px-6 py-3 text-sm font-bold rounded-e-xl uppercase tracking-wide text-white transition duration-300 hover:opacity-85 sm:mt-0 sm:w-auto sm:shrink-0">
                  <Search />
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <div className="flex items-center md:gap-10 gap-5">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex items-center md:gap-2 gap-1 cursor-pointer">
                      <ShoppingCart className="md:w-6 md:h-6 w-5 h-5" />
                      <label
                        htmlFor=""
                        className="bg-slate-200 rounded-full py-1 px-2 md:text-base text-xs"
                      >
                        {itemCount?.length || 0}
                      </label>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white outline-none">
                    <Cart cart={itemCount} />
                  </PopoverContent>
                </Popover>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={userButtonAppearance}
                />
              
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <SignUpButton>
                  <Button
                    className="rounded-md bg-white lg:px-5 lg:py-2.5 md:px-3 md:py-1.5 px-2 py-1 md:text-sm text-xs font-medium text-primary"
                    variant="outline"
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button className="rounded-md bg-primary lg:px-5 lg:py-2.5 md:px-3 md:py-1.5 px-2 py-1 text-sm font-medium text-white shadow">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
