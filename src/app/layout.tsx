"use client";
import {Inter} from "next/font/google";
import {Providers} from "./providers";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
const inter = Inter({subsets: ["latin"]});

import {ShoppingList} from "../../components/shopping-list/ShoppingList";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="w-full vh-screen">
        <ShoppingList />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}