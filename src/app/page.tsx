'use client'
import Image from "next/image";
import About from "./components/about";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import Typewriter from 'typewriter-effect';

export default function Home() {
  

  return (
    <div className="w-full h-full flex flex-col sm:flex-row  border-2 border-dark dark:border-primary overflow-auto">
      <main className="flex flex-col md:flex-row items-center  max-h-screen w-full h-full  justify-center md:justify-between p-2 md:p-8 ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <div className="flex w-full flex-col my-6 md:my-4 items-center md:items-start">
              <Typewriter
                options={{
                  strings: ['Hello!', 'Olá!', '안녕하세요!'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <h1 className="uppercase text-4xl md:text-6xl font-extrabold text-dark dark:text-primary tracking-wide drop-shadow-xl">Marta Carlos</h1>
            </div>
            <div className="flex flex-col text-center md:text-left md:flex-row max-w-5xl w-full justify-between font-mono text-sm text-dark dark:text-primary lg:flex">
              <div className="flex flex-col mr-0 md:mr-8">
                <p className=" my-2 md:my-5">
                  A Software Engineer that is always trying to see how she can sprinkle my interest in arts into her work. 
                  </p>
              </div>
            </div>
            <div className="flex my-2 md:my-12 w-full text-sm md:text-md ">
              <div className={'flex flex-row w-full py-2 gap-4 justify-center md:justify-start'}>
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
          </div>
          
        </div>
        <div className="flex flex-col h-min max-h-[55%] md:max-h-none justify-center md:justify-end shrink">
            <img
              src="/images/profile.png"
              alt="ProfileImage"
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] object-scale-down max-h-[300px] md:max-h-[800px]"
                style={{
                  width: "100%",
                  height: "auto",
                }}
            
              
            />
            </div>

        
        
      </main>
    </div>
  );
}
