//
"use client";
//
//
import { useSearchParams } from "next/navigation";
import Restaurants from "./_components/Restaurants";
import CategorySlider from "./_components/CategorySlider";
import Welcome from './_components/Welcome';

export default function Home() {
  const params = useSearchParams();
  // console.log(params.size);
  return (
    <main className="relative">
      {params.size === 0 ? (
        <Welcome />
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
