
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marta Carlos",
  description: "My own little space!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body>
        <main className=" p-4 md:p-12 gap-2 bg-primary text-dark dark:bg-complementary dark:text-primary">
          {children}
          <footer className=" w-full uppercase text-center font-sans">
            <small>© 2024 - All Rights Reserved</small>
          </footer>
        </main>
        </body>
    </html>
  );
}
