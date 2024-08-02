import ParagraphAnimation from "../ui/paragraph-animation";

function Info() {
  return (
    <div className="relative max-w-[1400px] overflow-hidden mx-auto rounded-[40px]">
      <div className="info-gradient rounded-b-full -z-10 absolute -top-[10%] w-full h-64 blur-[120px]"></div>
      <div className="w-full px-4 lg:px-0 pt-20 lg:pt-40 flex flex-col gap-10 lg:gap-20 max-w-3xl mx-auto">
        <ParagraphAnimation
          value={
            "It's time to rally against the diabetes test epidemic. The Lifer is leading the charge through research, education, and advocacy."
          }
        />
        <ParagraphAnimation
          value={
            "Join us to uplift your loved ones living with diabetes and help all those in need across America. But there's hope. Join us as we continue the fight against diabetes and work to find a cure."
          }
        />
      </div>
    </div>
  );
}

export default Info;
