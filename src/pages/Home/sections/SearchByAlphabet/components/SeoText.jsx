import { Info, ChevronRight } from "lucide-react";

import { seoColumns, seoBottomText, seoNote } from "./seoData";

function SeoText() {
  return (
    <section className="py-16 mx-10">
      <h2 className="mb-12 text-5xl font-bold text-[#303030]">
        SEO text
      </h2>

      {/* Columns */}
      <div className="grid gap-10 lg:grid-cols-3">
        {seoColumns.map((column, index) => (
          <div key={index} className="space-y-8">
            {column.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
              >
                {index === 1 && (
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#31D4B5]" />
                )}

                <p className="text-[15px] leading-8 text-[#666]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <p className="mt-12 text-[15px] leading-8 text-[#666]">
        {seoBottomText}
      </p>

      {/* Info Box */}
      <div className="my-10 flex items-start gap-5 rounded-2xl bg-gradient-to-r from-[#F7F7F7] to-[#F3FCFB] px-10 py-8">
        <Info
          size={22}
          className="mt-1 text-[#31D4B5]"
        />

        <p className="text-[15px] leading-8 text-[#666]">
          {seoNote}
        </p>
      </div>

      {/* Paragraph */}
      <p className="text-[15px] leading-8 text-[#666]">
        {seoBottomText}
      </p>

      {/* Show More */}
      <button className="mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#31D4B5] transition hover:text-[#27B99E]">
        <ChevronRight size={16} />
        Show Full Text
      </button>
    </section>
  );
}

export default SeoText;