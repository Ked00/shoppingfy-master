"use client";
import {Inter} from "next/font/google";
import {Providers} from "./providers";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
const inter = Inter({subsets: ["latin"]});

import {ShoppingList} from "../../components/inCart/Cart";
import { Sidemenu } from "../../components/sidemenu/Sidemenu";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="w-full vh-screen bg-zinc-50">
        <ShoppingList />
        <Sidemenu />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}