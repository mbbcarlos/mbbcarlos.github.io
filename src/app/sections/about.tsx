
import Card from "../components/card"
import SimpleCard from "../components/simpleCard"
import Timeline from "../components/timeline"

export default function Introduction({ }) {
 
  return (
    <section id='introduction' className="w-full flex flex-col h-fit">
    <h1 className="uppercase font-bold text-4xl  ">Introduction</h1>
    <div className="flex flex-row items-center justify-center md:justify-between lg:justify-center ">

      <div className="flex flex-col md:flex-row gap-12 w-full justify-between overflow-auto scrollbar-hide pt-12 pb-2">
      <SimpleCard data={{
            id: "about",
            title: "About",
            style: "grow"
          }}>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col w-auto md:w-[70%] ">
              <div className=" mt-4 text-md text-justify h-full">
                  🚧 Work in Progress, please come back later!
                  </div>
              </div>
              <div className="flex flex-col ">
              
                  <img src="/images/thinking.gif" className="w-auto" alt={"thinking image"} />
              
              </div>
            </div>
        </SimpleCard>
        <SimpleCard data={{
            id: "experience",
            title: "Experience"
          }}>
             <Timeline/>
        </SimpleCard>
       
       
    
      
          
      </div>
     
    </div>
  </section>
  )
}
