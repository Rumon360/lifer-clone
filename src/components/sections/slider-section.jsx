import { motion } from "framer-motion";

function SliderSection() {
  return (
    <section className="relative flex flex-col gap-8 lg:gap-16 py-20 w-full max-w-[1400px] mx-auto">
      <p className="text-sm sm:text-base text-center font-normal text-zinc-400">
        Trusted by <span className="text-foreground">3,450+</span> happy
        customers from the whole world
      </p>
      <div className="max-w-5xl overflow-hidden mx-auto w-full scroll-mask">
        <div className="flex gap-16 items-center">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="flex flex-shrink-0 items-center"
          >
            <img src="/company/parsey-health.svg" alt="parsey" />
            <img className="px-12" src="/company/one-medical.svg" alt="one" />
            <img className="px-12" src="/company/stanford.svg" alt="stanford" />
            <img
              className="px-12"
              src="/company/sutter-health.svg"
              alt="sutter"
            />
            <img className="px-12" src="/company/ucsf.svg" alt="ucsf" />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="flex flex-shrink-0 items-center pr-16"
          >
            <img src="/company/parsey-health.svg" alt="parsey" />
            <img className="px-12" src="/company/one-medical.svg" alt="one" />
            <img className="px-12" src="/company/stanford.svg" alt="stanford" />
            <img
              className="px-12"
              src="/company/sutter-health.svg"
              alt="sutter"
            />
            <img className="px-12" src="/company/ucsf.svg" alt="ucsf" />
          </motion.div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default SliderSection;
