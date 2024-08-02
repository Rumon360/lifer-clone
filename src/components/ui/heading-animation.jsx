/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const HeadingAnimationText = ({ textLines, className }) => {
  const animationProps = {
    initial: { opacity: 0, y: "100%" },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    className: "block",
  };

  return (
    <h3 className={cn("text-3xl lg:text-5xl font-semibold", className)}>
      {textLines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span {...animationProps}>{line}</motion.span>
        </span>
      ))}
    </h3>
  );
};

export default HeadingAnimationText;
