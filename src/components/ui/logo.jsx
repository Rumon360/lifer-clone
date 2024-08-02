/* eslint-disable react/prop-types */
import { useTransform, motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

function Logo({ progress }) {
  const opacityBg = useTransform(
    progress,
    [0, 0.06],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]
  );

  const opacity = useTransform(progress, [0, 0.06], [1, 0]);
  const rotate = useTransform(progress, [0.06, 0.08], ["0deg", "90deg"]);
  const size = useTransform(progress, [0.06, 0.08], ["36px", "50px"]);

  return (
    <motion.div
      style={{ backgroundColor: opacityBg }}
      className="flex p-2 rounded-xl items-center justify-between w-60 lg:w-96"
    >
      <div className="flex items-center gap-2">
        <motion.img
          style={{ width: size, height: size, rotate: rotate }}
          src="/logo.svg"
          alt="logo"
        />
        <motion.div style={{ opacity }}>
          <span className="text-lg">Jinsei</span>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity }}
        className="size-9 rounded-xl bg-accentForeground flex justify-center items-center"
      >
        <ArrowDownRight className="size-5" />
      </motion.div>
    </motion.div>
  );
}

export default Logo;
