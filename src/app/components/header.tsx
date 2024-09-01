

import Link from "next/link";

function NavMenu() {
  
  return (
    <div className="hidden md:visible text-base font-semibold justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
      <Link
        href="/"
        className="mx-2.5 relative hover:text-primary-light after:bg-primary-light after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      >
        Home
      </Link>
     
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex flex-row w-full uppercase  font-sans  justify-center">
      <nav className="bg-background-200 py-5 w-full ">
        <div className="flex flex-wrap justify-between items-center ">
          <Link href="/">
            <h2 className="text-3xl tracking-wider font-bold gradient">
              Marta Carlos
            </h2>
          </Link>

        </div>
      </nav>
    </header>
  );
}
