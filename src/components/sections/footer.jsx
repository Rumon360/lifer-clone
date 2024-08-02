import { useScroll, useTransform, motion } from "framer-motion";
import GradientSvg from "../ui/gradient-svg";
import { useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  return (
    <section ref={ref} className="w-full h-[200vh] relative">
      <div className="h-screen flex justify-center items-end pb-0 max-w-[1140px] mx-auto w-full sticky top-0 left-0 right-0">
        <div className="h-[60vh] flex justify-center items-center w-full relative">
          <div id="main-footer" className="w-full h-full">
            <div className="flex flex-col items-center gap-10">
              <div>
                <img src="/logo.svg" alt="logo" className="size-14" />
              </div>
              <div className="flex flex-col items-center gap-10">
                <h2 className="text-5xl font-medium max-w-lg mx-auto text-center">
                  Putting Your Health First,{" "}
                  <span className="inline-block relative">
                    Always
                    <div className="absolute -bottom-[20%]">
                      <GradientSvg />
                    </div>
                  </span>
                </h2>
                <ul className="flex gap-6 text-xs font-medium">
                  <li>Overview</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Careers</li>
                  <li>Help</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
            <footer className="px-8 py-6 w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center text-zinc-500 mt-20 text-xs border rounded-2xl lg:rounded-full">
              <div>
                <p>© 2024 Jinsei. All rights reserved</p>
              </div>
              <ul className="flex gap-2 lg:gap-10 items-center">
                <li>Privacy Policy </li>
                <li>Terms of Use</li>
                <li>Terms of Use</li>
              </ul>
              <a href="https://hmk360.vercel.app/" target="_blank">
                <p>
                  Built by the{" "}
                  <span className="text-gradient text-clip">HMK</span>
                </p>
              </a>
            </footer>
          </div>
          <motion.div
            style={{ y: y }}
            id="absolute-footer"
            className="absolute w-full h-full inset-0 border bg-white rounded-3xl shadow-lg"
          >
            <div className="h-full py-6 w-full relative">
              <div className="absolute size-[15rem] lg:size-[21.375rem] p-[1.125rem] top-0 -translate-y-[40%] left-1/2 -translate-x-[50%]">
                <img
                  className="absolute z-10 inset-0 w-full h-full"
                  src="/flower-one.png"
                  alt=""
                />
                <img
                  className="absolute z-10 inset-0 w-full h-full object-cover scale-90"
                  src="/flower-two.png"
                  alt=""
                />
                <div className="pink-gradient blur-3xl rounded-full -translate-x-[50%] left-1/2 size-[400px] absolute -z-10"></div>
              </div>
              <div className="flex justify-between w-full h-full items-end p-10">
                <div className="flex z-20 flex-col lg:flex-row gap-4 lg:gap-0">
                  <h2 className="text-3xl lg:text-4xl font-medium max-w-md">
                    Get an answer on any diabet question
                  </h2>
                  <button className="text-base px-6 py-4 border font-medium rounded-xl bg-white hover:bg-accent transition ease-in-out duration-500">
                    Start with a FREE assessment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
