import { ArrowDown, ArrowDownRight } from "lucide-react";
import HeadingAnimationText from "../ui/heading-animation";
import TextSplitting from "../ui/text-splitting";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="max-w-[1140px] px-2 lg:px-0 pb-20 lg:pb-40 mx-auto w-full h-full relative">
      <div className="w-full h-[32rem] lg:h-[30.5rem] rounded-2xl bg-purple-300 overflow-hidden relative">
        <img
          src="https://cdn.prod.website-files.com/66a3e3bd14091f433acdfb36/66a3e5301947f7c29785a450_time%20img.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between p-6 md:p-10 lg:p-16 inset-0 w-full h-full bg-white/10">
          <div className="flex gap-4 lg:gap-0 flex-col h-full justify-between">
            <HeadingAnimationText
              textLines={[
                "It’s time to rally",
                "against the diabetes",
                "epidemic",
              ]}
              className={
                "text-2xl sm:text-3xl lg:text-5xl font-semibold leading-[1.2]"
              }
            />
            <div className="flex items-center gap-4">
              <motion.button
                initial="initial"
                animate="initial"
                whileHover="animate"
                className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium rounded-2xl bg-white hover:bg-accent transition ease-in-out duration-500"
              >
                <TextSplitting>Book.a.FREE.Call</TextSplitting>
              </motion.button>
              <motion.button
                initial="initial"
                animate="initial"
                whileHover="animate"
                className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium rounded-2xl bg-zinc-300 hover:bg-zinc-200 transition ease-in-out duration-500"
              >
                <TextSplitting>Share.your.story</TextSplitting>
              </motion.button>
            </div>
          </div>
          <div className="h-full flex flex-col gap-4 lg:gap-0 justify-between">
            <div className="lg:-translate-x-1/2 flex flex-col justify-between p-6 w-64 h-32 rounded-2xl shadow  bg-white">
              <div className="flex justify-between w-full text-xs">
                <p className="font-medium">Blood Glucose</p>
                <p className="text-zinc-400">1 min ago</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <ArrowDownRight className="text-green-500 size-5" />
                </div>
                <div className="flex items-end gap-1.5">
                  <p className="text-3xl sm:text-4xl leading-none font-bold text-green-500 tracking-tighter">
                    4.4
                  </p>
                  <p className="text-xs font-light leading-none -translate-y-1">
                    mmol/L
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 w-64 h-32 flex flex-col justify-between rounded-2xl shadow aspect-video bg-white">
              <div className="flex justify-between w-full text-xs">
                <p className="font-medium">6 Hours Forecase</p>
                <p className="text-zinc-400">Predicted Range</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-rose-100 p-2">
                  <ArrowDown className="text-rose-500 size-5" />
                </div>
                <div className="flex items-end gap-1.5">
                  <p className="text-3xl sm:text-4xl leading-none font-extrabold text-rose-500 tracking-tighter">
                    72
                  </p>
                  <p className="text-xs font-light leading-none -translate-y-1">
                    % falling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
