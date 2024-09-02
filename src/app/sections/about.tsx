
import Card from "../components/card"
import Timeline from "../components/timeline"

export default function Introduction({ }) {
 
  return (
    <section id='introduction' className="w-full flex flex-col h-fit">
    <h1 className="uppercase font-bold text-4xl  ">Introduction</h1>
    <div className="flex flex-row items-center justify-center md:justify-between lg:justify-center ">

      <div className="flex flex-col md:flex-row gap-12 w-full overflow-auto pt-12 pb-2">
        <div className="flex flex-col p-3 md:min-w-[500px] md:max-w-[33%] h-full justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg  w-auto">
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
          <div className={"flex p-2 flex-col justify-between"}>
            
              <h2 className="uppercase font-bold text-xl">Experience</h2>
              
              <div className=" mt-4 ">
                <Timeline/>
              </div>
            
           
          </div>
          
        </div>
        <div className="flex flex-col p-3 md:min-w-[500px] md:max-w-[33%] h-full justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg  w-auto">
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
              <div className={"flex p-2 flex-col justify-between"}>
                
                  <h2 className="uppercase font-bold text-xl">About</h2>
                  <div className=" mt-4 text-md text-justify h-full">
                  🚧 Work in Progress, please come back later!
                  </div>
                
                <div className={"flex flex-col md:max-w-[40%]"}>
                  <div className={""}>
                      
                  </div>
                </div>
              </div>
              
        </div>
        <div className="flex flex-col p-3 md:min-w-[500px] md:max-w-[33%]  h-full justify-between bg-white dark:bg-[#dfe0df] text-dark rounded-lg  w-auto">
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
              <div className={"flex p-2 flex-col "}>
                
                  <h2 className="uppercase font-bold text-xl">Skills</h2>
                  <div className=" mt-4 text-md text-justify h-full">
                    🚧 Work in Progress, please come back later!
                  </div>
                
                <div className={"flex flex-col md:max-w-[40%]"}>
                  <div className={""}>
                      
                  </div>
                </div>
              </div>
              
        </div>
          
      </div>
     
    </div>
  </section>
  )
}
