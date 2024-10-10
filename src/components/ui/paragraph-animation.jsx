import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils/cn";

/* eslint-disable react/prop-types */
function ParagraphAnimation({ value }) {
  const elementRef = useRef();
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={elementRef}
      className={cn(
        "text-3xl sm:text-4xl lg:text-6xl flex flex-wrap font-semibold -leading-[4px]"
      )}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default ParagraphAnimation;

function Word({ children, range, progress }) {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-3 mt-3 relative">
      {characters.map((char, index) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);
        return (
          <Char key={index} range={[start, end]} progress={progress}>
            {char}
          </Char>
        );
      })}
    </span>
  );
}

function Char({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
