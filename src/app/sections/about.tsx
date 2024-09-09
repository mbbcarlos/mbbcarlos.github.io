
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
            title: "Who am i?",
            style: "grow"
          }}>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col w-auto md:w-[70%] justify-between">
                <div className=" mt-4 text-md text-justify h-full">
                  <div className="mb-4">
                    <h3 className="text-xl uppercase font-semibold mb-2">Professionally</h3>
                    <p>A Software Engineer currently working on supporting and implementing new features to a low-code focused mobile ecosystem. Everyday we&apos;re faced with different challenges: from supporting the new iOS and Android SDK versions, to figuring out what native feature customers could leverage next, focusing on Developer Experience.</p>
                    <p>In the terms of the <b>tech</b>, my day to day consists in a bit of a buffet: a bit of Typescript, Javascript, Swift and Kotlin.</p>
                  </div>
                </div>
                <div className=" mt-4 text-md text-justify h-full">
                  <div className="mb-4">
                  <h3 className="text-xl uppercase font-semibold">Personally</h3>
                  <p>I like to think of myself as little mix of a creative and a technical personal but I&apos;ve let my creative side down for many years. However, I&apos;m now on long life mission to change that.</p>
                  <p>I like drawing on my free time and I&apos;ve had my fair share of video editing adventures. One of the reasons I chose software engineering for a career was thinking &quot;What if, instead of using these editing softwares, I was the one building them?&quot; So maybe, who knows if that&apos;s where I&apos;ll end up in 20 years? </p>
                  </div>
                 
               
                </div>
              </div>
              <div className="flex flex-col ">
              
                  <img src="/images/cropped.gif" className="w-auto" alt={"thinking image"} />
              
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
