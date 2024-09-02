/**
 * This code was adapted from PrelineUI @ https://github.com/htmlstreamofficial/preline?tab=readme-ov-file
 * 
 * MIT License

    Copyright (c) 2024 Preline Labs Ltd.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */


type PointData = {
    loc: string,
    title: string,
    time: string,
    current?: boolean
   }

export default function TimePoint({ loc, title, time, current }: PointData) {
    return (
        <div className={`flex gap-x-3 `}>
          {/* Icon --> */}
          <div className={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#ff878b]`}>
              <div className="relative z-10 size-7 flex justify-center items-center">
                  <span className="bg-[#ff878b] inline-block center w-3 h-3 rounded-full"></span>
              </div>
          </div>
          {/* End Icon --> */}
      
          {/* Right Content --> */}
          <div className={`grow pt-0.5 pb-8 ${current ? 'animate-pulse' : ''}`}>
              {/* Heading --> */}
              <div className="">
                  <time className="text-xs font-medium uppercase ">
                  {time}
                  </time>
              </div>
              {/* End Heading --> */}
            <h3 className={`flex gap-x-1.5 font-semibold ${current ? 'text-xl' :''}`}>
              {title}
            </h3>
            <p className="mt-1 text-sm ">
              {loc}
            </p>
          </div>
          {/* End Right Content --> */}
        </div>
    )
  }
  