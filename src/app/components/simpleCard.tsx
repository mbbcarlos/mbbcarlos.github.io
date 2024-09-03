

import Timeline from "../components/timeline"

type CardData = {
    id: string,
    title: string,
    style?: string
 }
  

export default function SimpleCard({  data, children }: {data: CardData ,children: React.ReactNode}) {
 
  return (

        <div id={data.id} className={`flex flex-col p-3 md:min-w-[500px] bg-white dark:bg-[#dfe0df] text-dark rounded-lg ${data.style ? data.style : ''}`} >
            
          {/** buttons */}
          <div className="flex p-2 gap-1 justify-between items-center">
            
          <div className="flex p-2 gap-1">
            <div className="">
              <span className="bg-accent-dark inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-[#d87738] inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-accent box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <h2 className="uppercase font-bold text-xl">{data.title}</h2>
          </div>
          {/** content */}
          <div className={"flex p-2 flex-col justify-between h-full grow mt-4"}>  
              
                {children}
              
            
           
          </div>
          
        </div>
       
  )
}
