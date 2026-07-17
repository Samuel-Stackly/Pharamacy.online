import { ListFilter } from "lucide-react";

function SortBar() {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-[#F8F9FA] px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="flex flex-wrap items-center gap-8">
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#333]">
          Sort:
        </h3>

        <button className="flex items-center gap-2 text-sm font-medium text-[#31D4B5]">
          <ListFilter size={15} />
          By price
        </button>

        <button className="text-sm text-[#666] transition hover:text-[#31D4B5]">
          By popularity
        </button>
      </div>

      {/* Right Pagination */}
      <div className="flex items-center gap-2">
        <button className="flex h-7 w-7 items-center justify-center rounded bg-[#31D4B5]/10 text-xs font-medium text-[#31D4B5]">
          1
        </button>

        <button className="flex h-7 w-7 items-center justify-center rounded bg-white text-xs text-[#666] transition hover:bg-[#F0F0F0]">
          2
        </button>

        <button className="flex h-7 w-7 items-center justify-center rounded bg-white text-xs text-[#666] transition hover:bg-[#F0F0F0]">
          3
        </button>

        <button className="flex h-7 w-7 items-center justify-center rounded bg-white text-xs text-[#666] transition hover:bg-[#F0F0F0]">
          4
        </button>

        <span className="px-2 text-[#999]">...</span>

        <button className="flex h-7 w-7 items-center justify-center rounded bg-white text-xs text-[#666] transition hover:bg-[#F0F0F0]">
          32
        </button>
      </div>
    </div>
  );
}

export default SortBar;