//
//
//

import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ClientProvider from './_components/ClientProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodie Cart",
  description: "Foodie Cart _ A Place For All",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className={inter.className}>
          <ClientProvider>
            {children}
          </ClientProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
