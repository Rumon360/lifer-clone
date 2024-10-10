import { Sparkle } from "lucide-react";

import { motion } from "framer-motion";

const animation = {
  initial: (custom) => ({
    y: "0%",
    transition: { delay: custom * 0.015 },
  }),
  animate: (custom) => ({
    y: "-105%",
    transition: { delay: custom * 0.015 },
  }),
};

function HeroButton() {
  return (
    <motion.button
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="text-gradient group overflow-hidden relative rounded-2xl p-1"
    >
      <div className="flex relative gap-3 items-center w-full h-full bg-white rounded-2xl px-8 lg:px-16 py-4">
        <div className="relative">
          <Sparkle className="absolute group-hover:rotate-[180deg] duration-1000 ease-in-out transition -top-1 left-4 size-[9px] sm:size-[11px] text-purple-500 fill-purple-500" />
          <Sparkle className="text-purple-500 fill-purple-500 group-hover:rotate-[180deg] duration-1000 ease-in-out transition" />
        </div>
        <div className="relative overflow-hidden leading-none text-sm sm:text-base lg:text-lg font-medium">
          <div>
            {"Start.The.4-Week.Program".split("").map((l, i) => (
              <motion.span
                variants={animation}
                custom={i}
                transition={{
                  duration: 0.25,
                  ease: [0.455, 0.03, 0.515, 0.955],
                }}
                style={{ opacity: l === "." && 0 }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <div className="absolute">
            {"Start.The.4-Week.Program".split("").map((l, i) => (
              <motion.span
                variants={animation}
                custom={i}
                transition={{
                  duration: 0.25,
                  ease: [0.455, 0.03, 0.515, 0.955],
                }}
                style={{ opacity: l === "." && 0 }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="absolute bg-[#8f01ff] -bottom-[15%] size-6 left-0 blur-xl"></div>
        <div className="absolute bg-[#fdb83b] -top-[15%] size-6 right-0 blur-xl"></div>
      </div>
    </motion.button>
  );
}

export default HeroButton;
