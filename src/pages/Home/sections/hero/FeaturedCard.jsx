import { ArrowRight } from "lucide-react";
import { featuredProduct } from "./herodata";

function FeaturedCard() {
  return (
    <div className="flex h-[420px] w-[320px] flex-col rounded-[30px] bg-[#FF5F81] p-9 text-white">
      <div>
        <p className="text-lg">
          {featuredProduct.title}
        </p>

        <h2 className="mt-2 text-4xl font-bold leading-none">
          {featuredProduct.name}
        </h2>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={featuredProduct.image}
          alt={featuredProduct.name}
          className="max-w-[260px] object-contain"
        />
      </div>

      <button className="mt-auto flex w-fit items-center gap-2 rounded-full bg-[#F15A29] px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-[#de4f20]">
        {featuredProduct.button}
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export default FeaturedCard;