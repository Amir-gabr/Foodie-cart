

import Link from 'next/link';
import React from 'react'

export default function Welcome() {
  return (
    <section className="fixed inset-0 z-[1000] bg-gradient-to-b from-primary via-white to-primary bg-opacity-100 flex flex-col items-center justify-center">
      <h4 className="font-bold text-5xl text-primary ">Welcome To</h4>
      <h2 className="my-5 font-bold text-[6rem] text-primary text-center">Foodie Cart</h2>
      <p className="text-gray-700 text-lg">
        The best food app you will ever find
      </p>
      <Link
        href="?category=all"
        className="px-5 py-2 bg-primary text-white rounded-md mt-5"
      >
        Order Now
      </Link>
    </section>
  );
}
