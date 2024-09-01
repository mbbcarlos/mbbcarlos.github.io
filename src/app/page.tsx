import Image from "next/image";
import About from "./components/about";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row   overflow-auto">
      <main className="flex flex-col items-center  max-h-screen w-full h-full  justify-between p-2 md:p-8 ">
        <div className="relative flex w-full justify-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-row my-6 md:my-16 text-center items-center">
              <h1 className="uppercase text-4xl md:text-6xl font-extrabold text-dark dark:text-primary tracking-wide drop-shadow-xl drop-shadow-complementary">Marta Carlos</h1>
            </div>
            <div className="flex flex-col text-center md:text-left md:flex-row max-w-5xl w-full justify-between font-mono text-sm text-dark dark:text-primary lg:flex">
              <div className="flex flex-col mr-0 md:mr-8">
                <p className=" my-2 md:my-5">
                  Software Engineer, currently working @ OutSystems, with a masters degree in computer science from NOVA School of Science and Technology. 
                </p>
                <p className=" mb-2 md:mb-5">
                  Currently working mostly with Javascript and Typescript, occasionally touching on iOS Development. Always interested in new opportunities to use React and (more recently) Next projects.
                </p>
              </div>
            
              
            </div>
          
          </div>
          
        </div>
        <div className="flex flex-row justify-center flex-shrink">
            <Image
              src="/images/profile.png"
              alt="ProfileImage"
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              width={500}
              height={500}
              priority
            />
            </div>

        <div className="flex my-2 md:my-12 w-full text-center ">
          <div className={'flex flex-row w-full py-2 justify-center gap-4'}>
            <div className="flex-col">
              <Link href="https://www.linkedin.com/in/marta-carlos/">
                <button className={"flex items-center bg-dark dark:bg-primary text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 hover:border-2 font-semibold tracking-widest rounded-md hover:border-dark hover:text-dark dark:hover:text-primary dark:hover:border-primary dark:hover:bg-complementary hover:bg-primary duration-300 hover:-translate-x-3"}>
                  <BsLinkedin className={""}/> LinkedIn
                </button>
              </Link>
            </div>
            <div className="flex-col">
              <Link href="https://github.com/mbbcarlos">
                <button className="flex items-center bg-dark dark:bg-primary text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:border-2  hover:border-dark hover:text-dark dark:hover:text-primary 
                dark:hover:border-primary dark:hover:bg-complementary hover:bg-primary duration-300 hover:translate-x-3">
                  <BsGithub className={""}/> Github
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}
