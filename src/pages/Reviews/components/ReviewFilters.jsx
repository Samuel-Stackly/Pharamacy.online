import { List } from "lucide-react";

function ReviewFilters() {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between rounded-xl bg-[#F8FCFC] px-6 py-4">
      <div className="flex items-center gap-8">
        <span className="text-sm font-semibold uppercase text-[#303030]">
          Sort:
        </span>

        <button className="flex items-center gap-2 text-sm font-medium text-[#31D4B5]">
          <List size={16} />
          By date
        </button>

        <button className="text-sm text-[#777] transition hover:text-[#31D4B5]">
          The most useful
        </button>

        <button className="text-sm text-[#777] transition hover:text-[#31D4B5]">
          According to
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="h-8 w-8 rounded bg-[#F3F7F8] text-sm text-[#31D4B5]">
          1
        </button>

        <button className="h-8 w-8 rounded text-sm hover:bg-[#F3F7F8]">
          2
        </button>

        <button className="h-8 w-8 rounded text-sm hover:bg-[#F3F7F8]">
          3
        </button>

        <button className="h-8 w-8 rounded text-sm hover:bg-[#F3F7F8]">
          4
        </button>

        <span className="px-1">...</span>

        <button className="h-8 w-10 rounded text-sm hover:bg-[#F3F7F8]">
          32
        </button>
      </div>
    </div>
  );
}

export default ReviewFilters;