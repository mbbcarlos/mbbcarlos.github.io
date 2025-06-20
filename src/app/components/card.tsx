'use client'
import { motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react";

import { FiMinimize, FiMaximize } from "react-icons/fi";
import { MdClose } from "react-icons/md";



 type CardData = {
  id: string,
  title: string,
  description?: HTMLElement,
  
  link?: string,
  thumbnail?: string
 }





export default function Card({ cardData, children }: { cardData: CardData, children: React.ReactNode}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <div id={cardData.id}>
    <div className="flex flex-col p-3 md:min-w-[600px] md:max-w-[1200px] h-fit justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg  w-auto">
        {/** header */}
        <div className="flex p-2 gap-1 justify-between w-full border-b border-gray-200 dark:border-gray-300">
          <div className="flex gap-1">
            <button  onClick={() => setIsOpen(false)} disabled={!isOpen}>
              <span className={`${isOpen ? 'bg-accent-dark' : 'bg-gray-400'} inline-block p-1 rounded-full hover:disabled:bg-gray-400 hover:bg-primary`}>
              <MdClose className="text-white" />
              </span>
          
            </button>
            <button  disabled={true}>
              <span className={`bg-[#d87738] inline-block p-1 rounded-full h-6 w-6`}>
              </span>
            </button>
            <button disabled={true}>
              <span className="bg-accent box inline-block p-1 rounded-full h-6 w-6">
                
              </span>
            </button>
          </div>
          <h2 className="uppercase font-bold text-xl">{cardData.title}</h2>
        </div>

        {/** content */}
        {/* <motion.div
          //animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              
              y: 30,
              transition: { type: "spring", stiffness: 300, damping: 24 }
            },
            closed: {  y: 20, transition: { duration: 0.2 } }
          }}
        >
           */}
          <motion.div className={"flex px-4 md:px-10 py-4 flex-col md:flex-row justify-between "}>
              {children}
            {/* <div className={"flex flex-col md:max-w-[40%]"}>
              <Link href={cardData.link ? cardData.link : ''} className={""}>
                  <img src={cardData.thumbnail} className="rounded-md  aspect-square object-center object-cover" alt={""} />
              </Link>
            </div> */}
          </motion.div>
          {/* <motion.div className={"flex flex-row justify-between items-end text-sm w-full p-2 mb-8"}>
            
            {cardData.link ? 
              <Link href={cardData.link} className="underline font-semibold hover:text-accent">
                  See More {">"}
              </Link> : null
            }
          </motion.div> */}
        
        {/* </motion.div> */}
       
    </div>
  </div>
  )
}
