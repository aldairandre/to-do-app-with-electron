"use client";

import NavBar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500"],
  variable: '--main-font'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={`${poppins.style}`}>
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-2 ">
            <NavBar />
          </div>
          <div className="col-span-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
