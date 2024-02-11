import Image from "next/image";
import About from "./components/about";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
      </div>

      <div className="relative flex place-items-center  before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex-row">
          <div className=" my-16">
            <h1 className="uppercase text-6xl font-extrabold text-primary tracking-wide drop-shadow-xl">Marta Carlos</h1>
          </div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/images/profile.png"
            alt="ProfileImage"
            width={500}
            height={500}
            priority
          />
        </div>
        
      </div>

      <div className="flex  my-32 w-full text-center ">
        <div className={'flex flex-row w-full justify-center gap-4'}>
          <div className="flex-col ">
            <Link href="https://www.linkedin.com/in/marta-carlos/">
              <button className={"flex items-center bg-primary text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-purple-400 duration-300 hover:gap-2 hover:-translate-x-3"}>
                <BsLinkedin className={""}/> LinkedIn
              </button>
            </Link>
          </div>
          <div className="flex-col">
            <Link href="https://github.com/mbbcarlos">
              <button className={"flex items-center bg-primary text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-purple-400 duration-300 hover:gap-2 hover:translate-x-3"}>
                <BsGithub className={""}/> Github
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </main>
  );
}
