'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col w-screen h-screen items-center justify-between p-2 gap-2 bg-primary text-dark dark:bg-complementary dark:text-primary">
       
          {children}
           <footer className="flex flex-row w-full uppercase  font-sans  justify-center">
          <nav className="px-6 w-full ">
            <div className="flex flex-wrap justify-between items-center ">
              {/* From Uiverse.io by Javierrocadev */ }
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="group peer ring-0 bg-dark rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-primary  peer-focus:outline-none  after:content-['☀️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['🌑'] peer-hover:after:scale-95">
                </div>
              </label>
            </div>
          </nav>
        </footer>
        </main>
        </body>
    </html>
  );
}
