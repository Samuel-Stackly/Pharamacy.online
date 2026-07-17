import { CircleAlert } from "lucide-react";

const firstList = [
  "The delivered product does not correspond to what was ordered;",
  "The product is damaged due to damage to the integrity of the packaging;",
  "The product is damaged due to the packaging not matching the nature of the contents and the shipping conditions (with the exception of temperature requirements).",
];

const secondList = [
  "Products for the prevention and treatment of diseases at home, medicines;",
  "Personal hygiene items (toothbrushes and other similar products);",
  "Perfume and cosmetic products.",
];

function ReturnPolicy() {
  return (
    <section className="py-8">
      <h2 className="text-[36px] font-bold text-[#303030]">
        Exchange/return procedure
      </h2>

      <p className="mt-8 text-[15px] leading-8 text-[#777777]">
        You can refuse a delivered order and its payment in the following
        cases:
      </p>

      <ul className="mt-6 space-y-3">
        {firstList.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4"
          >
            <span className="mt-[11px] h-[6px] w-[6px] rounded-full border border-[#31D4B5]" />

            <span className="text-[15px] leading-8 text-[#777777]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center gap-3">
        <CircleAlert
          size={18}
          className="shrink-0 text-[#FF5C5C]"
        />

        <p className="text-[15px] text-[#777777]">
          The product can only be returned at the time of delivery.
        </p>
      </div>

      <p className="mt-10 text-[15px] leading-8 text-[#777777]">
        According to the Decree of the Government of the Russian Federation
        dated December 31, 2020 No. 2463, the following goods of proper
        quality are not subject to exchange or return:
      </p>

      <ul className="mt-6 space-y-3">
        {secondList.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4"
          >
            <span className="mt-[11px] h-[6px] w-[6px] rounded-full border border-[#31D4B5]" />

            <span className="text-[15px] leading-8 text-[#777777]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReturnPolicy;