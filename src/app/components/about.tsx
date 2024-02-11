import Section from './section'
import Link from 'next/link'
import {BsLinkedin, BsGithub} from 'react-icons/bs'



export default function About({ }) {
 
  return (
    <div id={"about"}>
      <Section sectionData={{
         id: "about",
         title: "ABOUT ME",
         imageURL: "/images/hello.gif"
      }}>
        <p>Software Engineer with a masters degree in computer science from NOVA School of Science and Technology (NOVA SST).</p>
        <p>Currently working as a Software Engineer @ Outsystems</p><br/>

        <p>On the side I like to draw and video editing, or anything that sparks my creativity</p>

        <div className={'flex'}>
          <Link href="https://www.linkedin.com/in/marta-carlos/">
            <button className={"flex justify-center items-center "}><BsLinkedin className={""}/> LinkedIn</button>
          </Link>
          <Link href="https://github.com/mbbcarlos">
            <button className={"flex justify-center items-center"}><BsGithub className={""}/> Github</button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
