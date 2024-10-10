import { Star } from "lucide-react";
import HeroGradient from "../ui/hero-gradient";
import HeroButton from "../ui/herobutton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-white h-screen w-full">
      <div className="relative h-full overflow-hidden max-h-[calc(100vh-1rem)] w-full max-w-[1400px] rounded-[40px] mx-auto">
        <div className="absolute inset-0 z-20 flex w-full h-full flex-col justify-between items-center gap-6 lg:gap-4 py-28 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              backgroundImage: "url(/alert-bg.svg)",
              backgroundPosition: "0 0",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: ".375rem 2rem .5rem 1.25rem",
            }}
            className="flex justify-center items-center w-full max-w-72 h-10"
          >
            <div className="text-gradient text-clip font-medium">
              Release new device in this may
            </div>
          </motion.div>
          <div className="">
            <h3
              className={
                "text-4xl sm:text-5xl md:text-6xl lg:text-9xl mx-auto leading-[1.1] font-bold text-center"
              }
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%", rotate: "5deg" }}
                  animate={{ y: 0, rotate: "0deg" }}
                  transition={{
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 0.5,
                  }}
                  className="block"
                >
                  Life-changing
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%", rotate: "5deg" }}
                  animate={{ y: 0, rotate: "0deg" }}
                  transition={{
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 0.5,
                  }}
                  className="block"
                >
                  diabetes support
                </motion.span>
              </span>
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base text-gray-600 max-w-sm sm:max-w-md mx-auto text-center"
          >
            Self-managing your diabetes can be tough… let us make it easy. Start
            using a CGM and get live insights from the medical team in your
            pocket.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <HeroButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-4 items-center text-sm sm:text-base lg:text-lg max-w-sm px-2 sm:px-0 sm:max-w-md md:max-w-xl font-medium text-center mx-auto"
          >
            <p>
              “Within just one week, we had identified the problem, tested a
              solution and validated the results. And I did it all by simply
              messaging with my care team within the Steady app.”
            </p>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Parteek, November 2019
            </p>
            <div className="flex gap-2 items-center">
              {[1, 2, 3, 4, 5].map((number) => (
                <Star
                  key={number}
                  className="fill-star border-none text-star"
                />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute z-10 -bottom-[35%] left-0 right-0 w-full h-96 mix-gradient blur-[120px] rounded-t-full"></div>
        <div
          style={{
            background: "url(/hero.png) 50% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 100%",
            maskImage: "radial-gradient(circle, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black, transparent 70%)", // for safari
          }}
          className="absolute w-full h-full inset-0"
        ></div>
      </div>
      <HeroGradient />
    </div>
  );
}

export default Hero;
