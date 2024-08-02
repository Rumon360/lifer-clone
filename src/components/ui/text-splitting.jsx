/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
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

function TextSplitting({ children, className }) {
  return (
    <motion.div
      className={cn(
        "relative cursor-pointer w-full h-full flex justify-center items-center overflow-hidden leading-none",
        className
      )}
    >
      <div className="overflow-hidden relative">
        <motion.div>
          {children.split("").map((text, index) => (
            <motion.span
              className="inline-block"
              variants={animation}
              custom={index}
              key={index}
              style={{ opacity: text === "." && 0 }}
              transition={{ duration: 0.25, ease: [0.455, 0.03, 0.515, 0.955] }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
        <motion.div className="absolute">
          {children.split("").map((text, index) => (
            <motion.span
              variants={animation}
              className="inline-block"
              key={index}
              custom={index}
              style={{ opacity: text === "." && 0 }}
              transition={{ duration: 0.25, ease: [0.455, 0.03, 0.515, 0.955] }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TextSplitting;
