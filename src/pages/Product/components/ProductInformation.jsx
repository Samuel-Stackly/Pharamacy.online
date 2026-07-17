import { ChevronRight } from "lucide-react";

import InfoTabs from "./InfoTabs";
import { productInformation } from "./productInfoData";


function ProductInformation() {
  return (
    <div>
      <h2 className="mb-8 text-4xl font-bold text-[#303030]">
        Instructions for use
      </h2>

      <InfoTabs />

      <div className="space-y-10">
        <div>
          <h3 className="text-3xl font-semibold text-[#303030]">
            Manufacturer
          </h3>

          <p className="mt-4 text-lg font-semibold text-[#31D4B5]">
            {productInformation.manufacturer}
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-3xl font-semibold text-[#303030]">
            Briefly about the product
          </h3>

          <div className="space-y-6 text-[15px] leading-8 text-[#666]">
            {productInformation.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-3xl font-semibold text-[#303030]">
            Indications
          </h3>

          <div className="space-y-6 text-[15px] leading-8 text-[#666]">
            {productInformation.indications.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-[#31D4B5] px-8 py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
          <ChevronRight size={18} />
          Show Full Text
        </button>
      </div>
    </div>
  );
}

export default ProductInformation;