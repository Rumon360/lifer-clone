import Spinner from "../portions/spinner";
import HeroGradient from "../ui/hero-gradient";
import { motion } from "framer-motion";

function Loader() {
  return (
    <section className="h-full relative w-full min-h-screen overflow-hidden">
      <div className="relative h-full overflow-hidden min-h-[calc(100vh-1rem)] w-full max-w-[1400px] rounded-[40px] mx-auto">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          className="absolute top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%]"
        >
          <Spinner />
          <div className="pink-gradient blur-3xl top-1/2 rounded-full -translate-x-[50%] left-1/2 -translate-y-[50%] size-[400px] absolute -z-10"></div>
        </motion.div>
        <div className="absolute inset-0 z-20 flex w-full h-full flex-col justify-between items-center gap-8 py-4"></div>
        <div className="absolute z-10 -bottom-[35%] left-0 right-0 w-full h-96 mix-gradient blur-[120px] rounded-t-full"></div>
      </div>
      <HeroGradient />
    </section>
  );
}

export default Loader;
