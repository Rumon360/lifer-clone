import { useScroll } from "framer-motion";
import Header from "./components/portions/header";
import Banner from "./components/sections/banner";
import CardsSection from "./components/sections/cards-section";
import Carousel from "./components/sections/carousel";
import Footer from "./components/sections/footer";
import Hero from "./components/sections/hero";
import Info from "./components/sections/info";
import PhotoCards from "./components/sections/photo-cards";
import Results from "./components/sections/results";
import SliderSection from "./components/sections/slider-section";
import { useEffect, useRef, useState } from "react";
import Loader from "./components/sections/loader";

function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) return <Loader />;

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <Header progress={scrollYProgress} />
      <Hero />
      <SliderSection />
      <Info />
      <CardsSection />
      <PhotoCards />
      <Results />
      <Banner />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
