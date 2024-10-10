import { ArrowDownRight, ArrowRight } from "lucide-react";
import HeadingAnimationText from "../ui/heading-animation";

function Results() {
  return (
    <section className="w-full h-full px-2 sm:px-0 py-20 lg:py-40 relative">
      <div className="w-full flex flex-col lg:flex-row items-start gap-4 justify-between p-6 sm:p-10 md:p-14 max-w-[1140px] mx-auto relative rounded-2xl border">
        <div className="flex gap-4 lg:gap-0 lg:h-[calc(100vh-1rem)] relative flex-col justify-between">
          <HeadingAnimationText
            textLines={["Real results", "and situations"]}
          />
          <div className="">
            <p className="text-zinc-500 text-sm sm:text-base max-w-sm sm:max-w-xs">
              Low blood glucose Use powerful insights of a CGM combined with
              real-time coaching to achieve meaningful goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row w-full justify-between">
            <div className="w-full lg:w-[18rem] flex flex-col justify-between p-8 rounded-2xl h-[22rem] bg-[#F1F1F1]">
              <h4 className="text-base font-medium">CGMs vs Fingersticks</h4>
              <div>
                <img src="/barchart.png" alt="" />
              </div>
              <p className="text-xs text-zinc-500">
                CGMs never let variations in glucose levels go undetected
              </p>
            </div>
            <div className="w-full lg:w-[18rem] flex flex-col justify-between p-8 rounded-2xl h-[22rem] bg-[#F1F1F1]">
              <h4 className="text-base font-medium">CGMs vs Fingersticks</h4>
              <div>
                <img src="/slopechart.png" alt="" />
              </div>
              <p className="text-xs text-zinc-500">
                Better understand the dawn phenomenon and how to tackle it
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[38rem] relative h-[22rem] rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/712413/pexels-photo-712413.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full bottom-3">
              <div className="w-full flex justify-between items-center py-3 px-6 mx-auto max-w-[calc(100%-4rem)] bg-white rounded-full">
                <div className="flex gap-4 items-center">
                  <ArrowDownRight className="size-5 text-[#8f01ff]" />
                  <p className="text-sm sm:text-base md:text-lg font-medium">
                    Low blood glucose
                  </p>
                </div>
                <div className="rounded-full bg-[#F4F4F5] p-2">
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
