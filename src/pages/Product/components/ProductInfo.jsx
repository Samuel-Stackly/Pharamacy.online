import {
  CheckCircle2,
  ChevronRight,
  Star,
} from "lucide-react";

import { product } from "../productData";

function ProductInfo() {
  return (
    <div className="flex flex-col">
      {/* Rating */}
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex gap-1">
          {[...Array(product.rating)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className="fill-[#FFC542] text-[#FFC542]"
            />
          ))}
        </div>

        <span className="text-sm text-[#777]">
          {product.reviews} reviews
        </span>

        <span className="text-sm text-[#999]">
          Article: {product.article}
        </span>
      </div>

      {/* Stock */}
      <div className="mt-6 flex items-center gap-2">
        <CheckCircle2
          size={18}
          className="text-[#31D4B5]"
        />

        <span className="font-medium text-[#31D4B5]">
          {product.stock}
        </span>
      </div>

      {/* Description */}
      <p className="mt-8 text-[15px] leading-8 text-[#666]">
        Creon contains pancreatin obtained from porcine
        pancreas. It helps improve digestion by replacing
        enzymes that the body does not produce in
        sufficient quantities.
      </p>

      {/* Characteristics */}
      <div className="mt-10">
        <h3 className="mb-5 text-lg font-semibold text-[#303030]">
          Characteristics
        </h3>

        <div className="space-y-4">
          {product.characteristics.map((item) => (
            <div
              key={item}
              className="flex justify-between border-b border-dashed border-[#E5E5E5] pb-3"
            >
              <span className="text-sm text-[#888]">
                {item.split(":")[0]}
              </span>

              <span className="font-medium text-[#303030]">
                {item.split(":")[1]}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase text-[#31D4B5] transition hover:text-[#25B79C]">
          <ChevronRight size={16} />

          Show all characteristics
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;