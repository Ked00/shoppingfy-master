"use client";
import {Inter} from "next/font/google";
import {Providers} from "./providers";
import {Offcanvas} from "react-bootstrap";
import {useIsOpen} from "../../hooks/isOpen";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({subsets: ["latin"]});

// export const metadata = {
//   title: "shoppingfy master",
//   description: "A web app that ",
// };

export default function RootLayout({children}: {children: React.ReactNode}) {
  const showing = useIsOpen();

  return (
    <html lang="en">
      <body className="w-100 vh-100">
        <Offcanvas
          show={showing.isShowing}
          placement="end"
          className="w-25"
          backdrop={false}
        >
          
        </Offcanvas>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
