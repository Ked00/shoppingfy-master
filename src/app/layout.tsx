"use client";
import {Inter} from "next/font/google";
import {Providers} from "./providers";
import {Offcanvas, Button} from "react-bootstrap";
import {Logo} from "../../components/Logo";
import {useIsOpen} from "../../hooks/isOpen";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}: {children: React.ReactNode}) {
  const showing = useIsOpen();

  return (
    <html lang="en">
      <body className="w-full vh-screen">
        <Offcanvas show={showing.isShowing} placement="end" className="w-1/6" backdrop={false}>
          <Offcanvas.Body className="border-transparent bg-[#FFF0DE]">
            <div className="bg-[#80485B] h-25 rounded d-flex">
              <Logo />
              <div className="d-flex flex-column align-items-center justify-content-center ms-3">
                <p className="text-wrap fw-bold fs-5 text-white ms-4">Didn't find what you need?</p>
                <Button className="bg-white border-0 text-black text-center w-50 p-2">
                  Add item
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
