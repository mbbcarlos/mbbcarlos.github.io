import TimePoint from "./base/timeItem";


export default function Education({ }: {}) {
  return (
    
    <div className="flex flex-col grow">
        <div className="flex gap-x-3">
            {/* Icon --> */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 ">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <span className="border-2 border-gray-400 inline-block center w-3 h-3 rounded-full"></span>
                </div>
            </div>
            {/* End Icon --> */}
        
            {/* Right Content --> */}
            <div className="grow pt-0.5 py-6">
            <p className="mt-0.5 text-sm text-gray-400 ">
                🤷🏻‍♀️ Who knows?
            </p>
            </div>
            {/* End Right Content --> */}
        </div>
        <TimePoint 
            loc={"King Sejong Institute @ NOVA FCSH"}
            title={"🇰🇷 Korean Language and Culture"} 
            time={"February 2024 - Now"}
            current={true}
            />
        <TimePoint 
            loc={"NOVA SST"}
            title={"🎓 Computer Science and Engineering"} 
            time={"September 2015 - October 2021"}/>
         <div className="flex gap-x-3">
            {/* Icon --> */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]  ">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <span className="border-2 border-accent-dark inline-block center w-3 h-3 rounded-full"></span>
                </div>
            </div>
            {/* End Icon --> */}
        
        </div>
        
    </div>
    
  )
}
