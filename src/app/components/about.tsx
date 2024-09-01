import Section from './card'
import Link from 'next/link'
import {BsLinkedin, BsGithub} from 'react-icons/bs'



export default function About({ }) {
 
  return (
    <div id={"about"}>
      <Section cardData={{
         id: "about",
         title: "ABOUT ME",
         imageURL: "/images/hello.gif"
      }}>
        <p>Software Engineer with a masters degree in computer science from NOVA School of Science and Technology (NOVA SST).</p>
        <p>Currently working as a Software Engineer @ Outsystems</p><br/>

        <p>On the side I like to draw and video editing, or anything that sparks my creativity</p>

      </Section>
    </div>
  )
}
