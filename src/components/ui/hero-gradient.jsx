import Stars from "./stars";

function HeroGradient() {
  return (
    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-72">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 hero-gradient blur-[120px]"></div>
        <div className="absolute flex justify-center items-center left-[5%] z-10 -bottom-[25%] w-full  size-64">
          <Stars />
        </div>
      </div>
    </div>
  );
}

export default HeroGradient;
