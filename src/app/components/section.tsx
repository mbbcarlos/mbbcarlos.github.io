import Image from "next/image"

 
type SectionData = {
  id: string,
  title: string,
  content?: HTMLElement
  imageURL: string
 }


export default function Section({ sectionData, children }: { sectionData: SectionData, children: React.ReactNode}) {
  return (
  <div id={sectionData.id}>
    <section className={"bg-white flex h-100vh w-full flex-col justify-center items-center rounded-lg"}>
      <h1 className={""}>{sectionData.title}</h1>
      <div className={"bg-white"}>
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className={"flex flex-row justify-center items-center"}>
          <div className={"card__content"}>
           <main>{children}</main>
          </div>
          <div className={"flex flex-col"}>
            <div className={""}>
                <Image src={sectionData.imageURL} width={500} height={500} alt={""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
