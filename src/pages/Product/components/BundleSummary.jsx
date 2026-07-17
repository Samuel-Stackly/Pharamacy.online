import { ShoppingCart } from "lucide-react";

function BundleSummary() {
  return (
    <div className="flex h-full min-h-[280px] flex-col justify-center rounded-2xl bg-white p-8 shadow-sm">
      <p className="text-sm text-[#9CA3AF]">
        Cheaper together
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#24325B]">
        RUB 41,108
      </h2>

      <p className="mt-2 text-sm text-[#F15A29] line-through">
        RUB 49,999
      </p>

      <button className="mt-10 flex items-center justify-center gap-3 rounded-full bg-[#31D4B5] py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#27B99E]">
        <ShoppingCart size={18} />

        Add to Cart
      </button>
    </div>
  );
}

export default BundleSummary;