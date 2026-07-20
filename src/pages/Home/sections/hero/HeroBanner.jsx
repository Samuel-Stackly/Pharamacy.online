import { ArrowRight } from "lucide-react";
import { heroBanner } from "./herodata";

function HeroBanner() {
  return (
    <div className="mt-6 flex h-auto w-full max-w-[350px] items-center rounded-[30px] bg-[#F7FBFD] px-6 py-8 lg:mt-10 lg:h-[420px] lg:w-[350px] lg:px-10 lg:py-10">
      <div className="flex h-full flex-col justify-center">
        <h1 className="text-4xl font-bold leading-tight text-[#12308E] lg:text-5xl">
          {heroBanner.title}
        </h1>

        <h2 className="mt-2 text-2xl font-medium text-[#12308E] lg:text-3xl">
          {heroBanner.subtitle}
        </h2>

        <p className="mt-6 text-base leading-7 text-[#6F8093] lg:mt-8 lg:text-lg lg:leading-8">
          {heroBanner.description}
        </p>

        <button className="mt-6 flex w-fit items-center gap-3 rounded-full bg-[#12308E] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#0E2674] lg:mt-8 lg:px-8 lg:py-4 lg:text-sm">
          {heroBanner.button}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;