import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "../../../../components/common/Container";

import PromotionCard from "./PromotionCard";
import { promotions } from "./promotionData";

function Promotions({
  title = "Promotion of the month",
  showHeader = true,
  rows = 2,
}) {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        {/* Header */}
        {showHeader && (
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-4xl font-bold text-[#303030]">
              {title}
            </h2>

            <div className="flex gap-3">
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E8E8] transition hover:bg-[#31D4B5] hover:text-white">
                <ChevronLeft size={20} />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8E8E8] transition hover:bg-[#31D4B5] hover:text-white">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Product Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => {
          const row =
            rowIndex % 2 === 0
              ? promotions
              : [...promotions].reverse();

          return (
            <div
              key={rowIndex}
              className={`grid gap-6 md:grid-cols-2 lg:grid-cols-5 ${
                rowIndex > 0 ? "mt-8" : ""
              }`}
            >
              {row.map((product, index) => (
                <PromotionCard
                  key={`${rowIndex}-${index}`}
                  product={product}
                />
              ))}
            </div>
          );
        })}
      </Container>
    </section>
  );
}

export default Promotions;