import { ChevronDown } from "lucide-react";

const contents = [
  "Attends preparatory courses;",
  "Accepts and filters information;",
  "Reading books, watching educational ones;",
  "Engages in physical activity;",
  "The last point will be discussed;",
  "Accepts and filters information;",
];

function TableOfContents() {
  return (
    <div className="rounded-[28px] bg-[#F7F9FB] p-8">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#303030]">
          Contents
        </h3>

        <ChevronDown
          size={20}
          className="text-[#303030]"
        />
      </div>

      <ul className="space-y-5">
        {contents.map((item) => (
          <li
            key={item}
            className="flex items-start gap-4"
          >
            <span className="mt-[10px] h-[6px] w-[6px] rounded-full border border-[#B8C0CC]" />

            <span className="leading-7 text-[#666666]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;