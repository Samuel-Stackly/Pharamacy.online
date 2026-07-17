import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [1, 2, 3, 4, 5];

function BlogPagination() {
  return (
    <section className="mt-16 flex justify-center">
      <div className="flex items-center gap-3">
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E4EAF0] text-[#666666] transition hover:border-[#31D4B5] hover:bg-[#31D4B5] hover:text-white">
          <ChevronLeft size={18} />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition ${
              page === 1
                ? "bg-[#31D4B5] text-white"
                : "border border-[#E4EAF0] text-[#666666] hover:border-[#31D4B5] hover:bg-[#31D4B5] hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="px-2 text-[#999999]">...</span>

        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E4EAF0] text-sm font-semibold text-[#666666] transition hover:border-[#31D4B5] hover:bg-[#31D4B5] hover:text-white">
          15
        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E4EAF0] text-[#666666] transition hover:border-[#31D4B5] hover:bg-[#31D4B5] hover:text-white">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default BlogPagination;