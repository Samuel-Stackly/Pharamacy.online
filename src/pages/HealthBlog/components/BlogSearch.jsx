import { Search } from "lucide-react";

function BlogSearch() {
  return (
    <section className="mt-8">
      <div className="rounded-[28px] bg-[#F7F9FB] p-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Start writing or enter the product name..."
            className="h-14 w-full rounded-full border border-[#E3EAF3] bg-white px-6 pr-16 text-[15px] outline-none transition focus:border-[#31D4B5]"
          />

          <button
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#31D4B5] text-white transition hover:bg-[#28BEA4]"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogSearch;