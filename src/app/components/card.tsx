import Link from "next/link"
import { BiLogoTypescript } from "react-icons/bi"
import { FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

 type CardData = {
  id: string,
  title: string,
  description?: HTMLElement,
  techStack: string[],
  link: string,
  thumbnail: string
 }



function getIconList(techStack: string[]) {
  return techStack.map((tech)=> {
    return {
      'next': <RiNextjsFill className="text-3xl" />,
      'python': <FaPython className="text-3xl" />,
      'react': <FaReact className="text-3xl" />,
      'node': <FaNode className="text-3xl" />,
    }[tech]
    
  });
}


export default function Card({ cardData, children }: { cardData: CardData, children: React.ReactNode}) {
  return (
  <div id={cardData.id}>
    <div className="flex flex-col p-3 md:min-w-[600px] h-full justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg  w-auto">
        {/** buttons */}
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-[#ff878b] inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-[#d87738] inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-accent box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>

        {/** content */}
        <div className={"flex p-2 flex-col md:flex-row gap-4 justify-between"}>
          <div className="flex flex-col ">
            <h2 className="uppercase font-bold text-xl">{cardData.title}</h2>
            <div className="max-w-72 mt-4 text-md text-justify h-full">
             {children}
            </div>
           
          </div>
          <div className={"flex flex-col md:max-w-[40%]"}>
            <div className={""}>
                <img src={cardData.thumbnail} className="rounded-sm  aspect-square object-center object-cover" alt={""} />
            </div>
          </div>
        </div>
        <div className={"flex flex-row justify-between items-end text-sm w-full p-2"}>
           <div>
              <small>Built with</small>
              <div className="flex flex-row gap-2" >
                {getIconList(cardData.techStack)}
                
              </div>
           </div>
          <Link href={cardData.link} className="underline font-semibold hover:text-accent">
            
              See More {">"}
           
          </Link>
        </div>
    </div>
  </div>
  )
}
