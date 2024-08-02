import { ArrowRight, Heart, Sun } from "lucide-react";
import GradientSvg from "../ui/gradient-svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import TextSplitting from "../ui/text-splitting";

function PhotoCards() {
  const containerRef = useRef(null);
  return (
    <section
      ref={containerRef}
      className="max-w-[1140px] mx-auto w-full h-full relative"
    >
      <div className="flex flex-col gap-8 h-full w-full relative">
        <div className="flex w-full justify-center">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{
              root: containerRef,
              margin: "0px 0px -60% 0px",
              once: true,
            }}
            transition={{ duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] }}
            id="top-photo"
            className="relative z-20 w-[22.5rem] h-[13rem] rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1656582117510-3a177bf866c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute right-3 top-3 bg-white shadow p-3 rounded-full">
              <Heart className="size-5 text-purple-500" />
            </div>
            <div className="absolute bottom-3 left-3">
              <button className="px-4 py-2 text-xs bg-white rounded-lg bg-opacity-70 font-medium backdrop-blur-lg">
                Try for FREE
              </button>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-between items-center w-full">
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{
              root: containerRef,
              margin: "0px 0px -50% 0px",
              once: true,
            }}
            transition={{ duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] }}
            className="relative hidden lg:block z-20 h-[22.8rem] w-[18rem] rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1625136218425-e74fa101ae28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 w-full">
              <div className="flex flex-col gap-4 max-w-[calc(100%-1rem)] mx-auto bg-white p-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Sun className="size-4 text-purple-500" />
                  <p className="text-xs text-zinc-400">
                    Estimated Date • Today
                  </p>
                </div>
                <h2 className="text-2xl font-medium">March 16, 2024</h2>
                <div className="flex justify-between items-center">
                  <button className="text-xs font-medium px-4 py-2 rounded-lg bg-zinc-100">
                    Add a meal
                  </button>
                  <div className="p-2 bg-zinc-100 rounded-full">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-[3rem] lg:text-[3.5rem] font-bold leading-none max-w-lg mx-auto text-center">
                  Managing your diabetes has never been{" "}
                  <span className="inline-block relative">
                    easier
                    <div className="absolute -bottom-[10%]">
                      <GradientSvg />
                    </div>
                  </span>
                </h2>
                <p className="text-base max-w-md text-zinc-500 mx-auto text-center">
                  Self-managing your diabetes can be tough… let us make it easy.
                  Start using a CGM and get live insights from the medical team
                  in your pocket.
                </p>
              </div>
              <motion.button
                initial="initial"
                animate="initial"
                whileHover="animate"
                className="text-base bg-white hover:bg-accent transition ease-in-out duration-500 font-medium border rounded-xl px-6 py-3"
              >
                <TextSplitting>Start.with.a.FREE.assessment</TextSplitting>
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            viewport={{
              root: containerRef,
              margin: "0px 0px -50% 0px",
              once: true,
            }}
            transition={{ duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] }}
            className="relative hidden lg:block z-20 h-[22.8rem] w-[18rem] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1668554245790-bfdc72f0bb3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-3 w-full">
              <div className="flex flex-col gap-2 justify-center items-center max-w-[calc(100%-1rem)] mx-auto bg-white p-4 rounded-2xl">
                <Sun className="size-6 text-purple-500" />
                <p>Low Blood Sugar In The Mornings</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center w-full">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            viewport={{
              root: containerRef,
              margin: "0px 0px -20% 0px",
              once: true,
            }}
            transition={{ duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955] }}
            className="relative w-[22.5rem] h-[13rem] rounded-3xl overflow-hidden"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1658506646337-095541321ee3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute size-64 rounded-full bg-purple-500 bg-opacity-30 -top-[40%] -left-[40%]"></div>
            <h3 className="absolute z-10 flex flex-col leading-none bottom-3 left-6 font-medium text-2xl text-white">
              <span>An initial</span>
              <span>appointment with</span>
              <span>your endocrinologist</span>
            </h3>
            <div className="absolute bg-black w-full h-full inset-0 bg-opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PhotoCards;
