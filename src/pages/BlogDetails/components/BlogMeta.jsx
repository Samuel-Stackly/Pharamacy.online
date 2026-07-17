import { Clock3, Star } from "lucide-react";

function BlogMeta() {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-center gap-5 text-sm">
        {/* Reading Time */}
        <div className="flex items-center gap-2 text-[#8A8A8A]">
          <Clock3
            size={16}
            className="text-[#31D4B5]"
          />

          <span>10 minutes to read</span>
        </div>

        {/* Category */}
        <span className="font-medium text-[#303030]">
          Category name
        </span>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-[#31D4B5] px-4 py-2 text-xs font-semibold text-white">
            Manufacturer
          </span>

          <span className="rounded-full bg-[#F5F7F9] px-4 py-2 text-xs text-[#666]">
            Briefly about the product
          </span>

          <span className="rounded-full bg-[#F5F7F9] px-4 py-2 text-xs text-[#666]">
            Indications
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Rating */}
        <div className="flex items-center gap-3">
          <span className="text-[#666]">
            49 ratings
          </span>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className={
                  index < 4
                    ? "fill-[#F6B400] text-[#F6B400]"
                    : "text-[#D7D7D7]"
                }
              />
            ))}
          </div>
        </div>

        {/* Read Later */}
        <button className="rounded-full border border-[#31D4B5] px-7 py-3 text-sm font-medium text-[#31D4B5] transition hover:bg-[#31D4B5] hover:text-white">
          Read later
        </button>
      </div>
    </section>
  );
}

export default BlogMeta;