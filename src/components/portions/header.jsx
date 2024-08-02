/* eslint-disable react/prop-types */
import Logo from "../ui/logo";
import TextSplitting from "../ui/text-splitting";
import { motion } from "framer-motion";

function Header({ progress }) {
  return (
    <header className="fixed top-0 bg-transparent py-[26px] z-50 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-[90.8rem] px-2 mx-auto h-16 flex items-center justify-between font-medium"
      >
        <Logo progress={progress} />
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-base">
            <motion.li
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="h-12 w-36 flex gap-2 justify-center items-center"
            >
              <div className="size-1 rounded-full bg-black"></div>
              <TextSplitting>Share.your.story</TextSplitting>
            </motion.li>
            <li>
              <motion.button
                initial="initial"
                animate="initial"
                whileHover="animate"
                className="h-12 w-40 transition ease-in-out duration-500 flex justify-center items-center rounded-xl pink-gradient"
              >
                <TextSplitting>Book.a.free.call</TextSplitting>
              </motion.button>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;
