//
"use client";
//
//
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Restaurants from "./_components/Restaurants";
import CategorySlider from "./_components/CategorySlider";

export default function Home() {
  const params = useSearchParams();
  // console.log(params.size);
  return (
    <main className="relative">
      {params.size === 0 ? (
        <section className="fixed inset-0 z-[1000] bg-gradient-to-b from-primary via-white to-primary bg-opacity-100 flex flex-col items-center justify-center">
          <h4 className="font-bold text-4xl text-red-400">Welcome To</h4>
          <h2 className="my-5 font-bold text-5xl text-primary">Foodie Cart</h2>
          <p className="font-bold text-gray-500">
            The best food app you will ever find
          </p>
          <Link
            href="?category=all"
            className="px-5 py-2 bg-primary text-white rounded-md mt-5"
          >
            Order Now
          </Link>
        </section>
      ) : (
        ""
      )}
      <section className="container min-h-screen py-20">
        <CategorySlider />
        <Restaurants />
      </section>
    </main>
  );
}
