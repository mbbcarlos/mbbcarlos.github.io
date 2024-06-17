import Image from "next/image";
import About from "./components/about";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-2 md:p-24 ">
      <div className="relative flex w-full justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-row my-6 md:my-16 text-center items-center">
            <h1 className="uppercase text-4xl md:text-6xl font-extrabold text-primary tracking-wide drop-shadow-xl drop-shadow-complementary">Marta Carlos</h1>
          </div>
           <div className="flex flex-col text-center md:text-left md:flex-row max-w-5xl w-full justify-between font-mono text-sm text-dark lg:flex">
            <div className="flex flex-col mr-0 md:mr-8">
              <p className="text-black my-2 md:my-5">
                Software Engineer, currently working @ OutSystems, with a masters degree in computer science from NOVA School of Science and Technology. 
              </p>
              <p className="text-black my-2 md:my-5">
                Software Engineer, currently working @ OutSystems, with a masters degree in computer science from NOVA School of Science and Technology. 
              </p>
            </div>
            <div className="flex flex-col my-2 md:my-5 md:mr-8">
              <p>
                My current interests lie in designing and developing web applications that provide intuitive user experiences.
              </p>
            </div>
            
          </div>
         
        </div>
        
      </div>
      <div className="flex flex-row justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/images/profile.png"
            alt="ProfileImage"
            width={500}
            height={500}
            priority
          />
          </div>

      <div className="flex my-12 md:my-32 w-full text-center ">
        <div className={'flex flex-row w-full justify-center gap-4'}>
          <div className="flex-col ">
            <Link href="https://www.linkedin.com/in/marta-carlos/">
              <button className={"flex items-center bg-primary text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-complementary duration-300 hover:gap-2 hover:-translate-x-3"}>
                <BsLinkedin className={""}/> LinkedIn
              </button>
            </Link>
          </div>
          <div className="flex-col">
            <Link href="https://github.com/mbbcarlos">
              <button className={"flex items-center bg-primary text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-complementary duration-300 hover:gap-2 hover:translate-x-3"}>
                <BsGithub className={""}/> Github
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </main>
  );
}
