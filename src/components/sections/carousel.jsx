import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { carouselCards } from "../../data/carousel";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

function Carousel() {
  const [index, setIndex] = useState(0);
  const indexMotionValue = useMotionValue(0);
  const progress = useTransform(indexMotionValue, [0, 3], ["25%", "100%"]);

  return (
    <section className="w-full px-2 lg:px-0 pb-0">
      <div className="w-full max-w-[1140px] relative mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          speed={800}
          loop
          autoplay={{ delay: 5000 }}
          onRealIndexChange={(swiperCore) => {
            indexMotionValue.set(swiperCore.realIndex);
            setIndex(swiperCore.realIndex);
          }}
        >
          {carouselCards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="bg-accent relative px-2 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-2xl w-full h-[500px] mx-auto"
            >
              <div className="w-full lg:w-[60%] overflow-hidden">
                <div className="flex justify-center flex-col items-center">
                  <motion.h3
                    initial={{ y: "10%" }}
                    whileInView={{ y: "-50%" }}
                    transition={{
                      ease: "linear",
                      delay: 0.5,
                      duration: 4.5,
                    }}
                    className="max-w-lg pb-2 text-center mx-auto font-bold text-3xl lg:text-6xl"
                  >
                    &#34;{card.text}&#34;
                  </motion.h3>
                </div>
              </div>
              <div className="w-[100%] h-[60%] lg:w-[40%] lg:h-full p-6 z-10">
                <div className="w-full relative bg-slate-400 rounded-2xl h-full overflow-hidden">
                  <img
                    src={card.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute px-4 bottom-3 w-full">
                    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow rounded-2xl">
                      <div className="space-y-1">
                        <h4 className="font-medium text-sm">{card.name}</h4>
                        <p className="text-zinc-500 text-xs">
                          {card.city}, {card.date}
                        </p>
                      </div>
                      <div className="size-10 rounded-full bg-accent relative">
                        <Play className="size-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[#8f01ff]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[70%] -bottom-[20%] blur-3xl w-full bg-accent/80 left-0"></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full  absolute -bottom-[10%]">
          <motion.div className="w-full overflow-hidden rounded-2xl h-[3px] bg-zinc-300">
            <motion.div
              style={{ scaleX: progress }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className="w-full transition ease-[cubic-bezier(0.33,1,0.68,1)] duration-1000 origin-left bg-foreground h-full"
            ></motion.div>
          </motion.div>
          <div className="pt-3 flex text-sm justify-between items-center">
            <p className="font-medium">{index + 1}/4</p>
            <p className="text-zinc-500">Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
