
import { CgScrollH } from "react-icons/cg"
import Card from "../components/card"


export default function Projects({ }) {
 
  return (
    <section id='freelance' className="w-full flex flex-col h-fit my-12">
    <h1 className="uppercase font-bold text-4xl  ">Projects</h1>
    <CgScrollH className="hidden md:block mt-12 text-4xl animate-pulse"/>
    <div className="flex flex-row justify-center md:justify-between lg:justify-center">
      <div className="flex flex-col mt-12 md:mt-0 md:flex-row gap-12 w-full justify-between overflow-x-scroll scrollbar-hide pt-2 pb-2  min-h-none md:min-h-[500px]">
        <Card cardData={{
            id: "rothctm",
            title: "ROT@HCTM",
            techStack: ['next', 'python'],
            link:"https://rothstm.pt/",
            thumbnail:  "/images/rotstem.png"
          }}>
            <div className="flex h-full flex-col justify-between">
              <p>A website that allows you to explore the history of Portugal&apos;s most important science, technology and medicine institutions. It offers an interactive map experience, immersing the user in the historical context of the historical institutions</p>
              <small>@ CIUHCT Copyrights reserved</small>
            </div>
          </Card>
          <Card cardData={{
            id: "stemgram",
            title: "StemGram",
            techStack: ['react', 'node'],
            link:"https://stemgram.pt/",
            thumbnail:  "/images/stemgram.png"
          }}>
            <div className="flex h-full flex-col justify-between">
              <p>A website filled with photographs about the construction of technological and scientific landscapes in Portugal (1850-1914), offering an interactive map experience, as well as an advanced search process.</p>

              <small>@ CIUHCT Copyrights reserved</small>
            </div>
            

            
          </Card>
          <Card cardData={{
            id: "vrfire",
            title: "Wildfires in VR",
            techStack: ['unreal', 'flask', 'kotlin'],
            thumbnail:  "/images/vr-project.png"
          }}>
            <div className="flex h-full flex-col justify-between">
              <p>Developed a prototype of a virtual world, based off a real-world location in Portugal and populated it with data from a wildfire. The virtual world offers methods to navigate through time, past or present, allowing for throughout analysis of the wildfire progression.</p>

            </div>            
          </Card>
          
      </div>
    </div>
    
  </section>
  )
}
