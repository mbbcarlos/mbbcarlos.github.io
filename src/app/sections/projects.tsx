
import { CgScrollH } from "react-icons/cg"
import Card from "../components/base/card"
import ExpandableItem from "../components/base/expandable"
import Rotstem from "../topics/rotstem"
import StemGram from "../topics/stemgram"
import Wildfires from "../topics/wildfires"


export default function Projects({ }) {
  return (
    <section id='freelance' className="w-full flex flex-col h-fit my-12">
      <div className="flex flex-row items-center justify-center md:justify-between lg:justify-center ">
        <div className="flex flex-col gap-12 w-full justify-between  pt-12 pb-2">
          <Card cardData={{
            id: "projects",
            title: "Projects",
          }}>
            <div className="w-full">
              <Rotstem />
            </div>
            <div className="flex flex-row align-middle justify-between items-center gap-12  w-full">
              <StemGram />
            </div>
            <div className="flex flex-row align-middle justify-between items-center gap-12  w-full">
              <Wildfires />

            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
