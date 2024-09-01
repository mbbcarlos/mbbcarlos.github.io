
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
      <body className={inter.className}>
        <main className="flex flex-col w-screen h-screen items-center justify-between p-4 md:p-12 gap-2 bg-primary text-dark dark:bg-complementary dark:text-primary">
          {children}
          <footer className="flex flex-row w-full uppercase  font-sans  justify-center">
            <small>© 2024 - All Rights Reserved</small>
          </footer>
        </main>
        </body>
    </html>
  );
}
