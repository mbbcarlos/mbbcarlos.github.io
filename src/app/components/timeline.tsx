import TimePoint from "./timeItem";


export default function Timeline({ }: {}) {
  return (
    
    <div className="">
     <TimePoint 
        loc={"NOVA SST"}
        title={"🎓 Masters Degree in Computer Science"} 
        time={"2015-2021"}/>
    <TimePoint 
        loc={"Vodafone PT"}
        title={"☎️ Frontend Web Developer"} 
        time={"Nov 2021 - March 2022"}/>
    <TimePoint 
        loc={"OutSystems"}
        title={"👩🏻‍💻 Software Engineer"} 
        time={"March 2022 - Now"}
        current={true}
        />
     <div className="flex gap-x-3">
          {/* Icon --> */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 ">
              <div className="relative z-10 size-7 flex justify-center items-center">
                  <span className="border-2 border-gray-400 inline-block center w-3 h-3 rounded-full"></span>
              </div>
          </div>
          {/* End Icon --> */}
      
          {/* Right Content --> */}
          <div className="grow pt-0.5 pb-8">
            <p className="mt-0.5 text-sm text-gray-400 ">
               🤷🏻‍♀️ Who knows?
            </p>
          </div>
          {/* End Right Content --> */}
        </div>
    </div>
    
  )
}
