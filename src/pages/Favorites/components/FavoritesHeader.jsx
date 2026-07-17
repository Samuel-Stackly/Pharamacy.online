import { Trash2 } from "lucide-react";

function FavoritesHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <h1 className="text-5xl font-bold text-[#24325B]">
        Favorites
      </h1>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wide text-[#777777] transition hover:text-[#31D4B5]">
          <Trash2 size={18} />
          Clear everything
        </button>

        <button className="rounded-full bg-[#31D4B5] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#28BEA4]">
          Add all to cart
        </button>
      </div>
    </div>
  );
}

export default FavoritesHeader;