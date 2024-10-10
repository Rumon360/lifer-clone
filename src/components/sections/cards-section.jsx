import { ArrowUpRight } from "lucide-react";
import HeadingAnimationText from "../ui/heading-animation";

const cards = [
  {
    id: 1,
    title: "3-5",
    desc: "CGM at your door in 3-5 days",
  },
  {
    id: 2,
    title: "24/7",
    desc: "LIVE coaching via chat",
  },
  {
    id: 3,
    title: "20m",
    desc: "Monthly 20-min virtual visits",
  },
  {
    id: 4,
    title: "5x",
    desc: "Easy-to-understand reports",
  },
];

function CardsSection() {
  return (
    <section className="max-w-[1140px] py-20 lg:py-40 mx-auto w-full">
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row px-2 lg:px-0 w-full justify-between items-start">
        <HeadingAnimationText
          textLines={["The new gold standard", "in diabetes care"]}
        />
        <button className="flex group bg-white hover:bg-accent transition ease-in-out duration-300 items-center gap-4 py-3 px-6 rounded-xl border">
          <span className="font-medium text-base">Learn More</span>
          <ArrowUpRight className="group-hover:rotate-45 size-5 transition ease-in-out duration-300" />
        </button>
      </div>
      <div className="pt-10 lg:pt-20 px-2 lg:px-0 grid lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            className="border transition ease-in-out duration-500 hover:bg-accent cursor-pointer flex flex-col justify-between w-full p-6 gap-6 lg:gap-0 lg:aspect-square rounded-xl"
            key={card.id}
          >
            <h3 className="text-4xl sm:text-5xl lg:text-7xl">{card.title}</h3>
            <p className="text-base text-zinc-500">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsSection;
