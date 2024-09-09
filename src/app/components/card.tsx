'use client'
import { motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react";
import { FaNode, FaPython, FaReact } from "react-icons/fa";
import { FiMinimize, FiMaximize } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask, SiKotlin, SiUnrealengine } from "react-icons/si";


 type CardData = {
  id: string,
  title: string,
  description?: HTMLElement,
  techStack: string[],
  link?: string,
  thumbnail: string
 }



function getIconList(techStack: string[]) {
  return techStack.map((tech)=> {
    return {
      'next': <RiNextjsFill className="text-3xl"/>,
      'python': <FaPython className="text-3xl" />,
      'react': <FaReact className="text-3xl" />,
      'node': <FaNode className="text-3xl" />,
      'unreal': <SiUnrealengine className="text-3xl"/>,
      'flask': <SiFlask className="text-3xl"/>,
      'kotlin': <SiKotlin className="text-3xl"/>


    }[tech]
    
  });
}


export default function Card({ cardData, children }: { cardData: CardData, children: React.ReactNode}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <div id={cardData.id}>
    <div className="flex flex-col p-3 md:min-w-[600px] md:max-w-[800px] h-fit justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg  w-auto">
        {/** buttons */}
        <div className="flex p-2 gap-1 justify-between">
          <div className="flex gap-1">
            <button  onClick={() => setIsOpen(false)} disabled={!isOpen}>
              <span className={`${isOpen ? 'bg-accent-dark' : 'bg-gray-400'} inline-block p-1 rounded-full hover:disabled:bg-gray-400 hover:bg-primary`}>
              <MdClose className="text-white" />
              </span>
          
            </button>
            <button  disabled={true}>
              <span className={`bg-[#d87738] inline-block p-1 rounded-full `}>
                <FiMinimize className="text-[#d87738]" />
              </span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="pointer-events-auto">
              <span className="bg-accent box inline-block p-1 rounded-full hover:bg-primary">
                {isOpen ? <FiMinimize className="text-white" /> :
                <FiMaximize className="text-white" />
                }
              </span>
            </button>
          </div>
          <h2 className="uppercase font-bold text-xl">{cardData.title}</h2>
        </div>

        {/** content */}
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              
              y: 30,
              transition: { type: "spring", stiffness: 300, damping: 24 }
            },
            closed: {  y: 20, transition: { duration: 0.2 } }
          }}
        >
          {isOpen ?  <>
          <motion.div className={"flex p-2 flex-col md:flex-row gap-4 justify-between"}>
            <div className="flex flex-col ">
              <div className="max-w-72 text-md text-justify h-full">
              {children}
              </div>
            
            </div>
            <div className={"flex flex-col md:max-w-[40%]"}>
              <Link href={cardData.link ? cardData.link : ''} className={""}>
                  <img src={cardData.thumbnail} className="rounded-md  aspect-square object-center object-cover" alt={""} />
              </Link>
            </div>
          </motion.div>
          <motion.div className={"flex flex-row justify-between items-end text-sm w-full p-2 mb-8"}>
            <div>
                <small>Built with</small>
                <div className="flex flex-row gap-2" >
                  {getIconList(cardData.techStack)}
                  
                </div>
            </div>
            {cardData.link ? 
              <Link href={cardData.link} className="underline font-semibold hover:text-accent">
                  See More {">"}
              </Link> : null
            }
          </motion.div></>
          : 
          <motion.div className={"flex flex-row justify-between w-full  p-2 mb-8"}>
               <Link href={cardData.link ? cardData.link : ''} className={"w-full"}>
                  <img src={cardData.thumbnail} className="rounded-md  aspect-video object-center object-cover h-32 w-full" alt={""} />
              </Link>
          </motion.div>
          }
        </motion.div>
       
    </div>
  </div>
  )
}
