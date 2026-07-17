const countries = [
  "Belarus",
  "Germany",
  "Greece",
  "Ireland",
  "Spain",
  "Italy",
  "China",
];

const impacts = [
  "For the bronchi",
  "For hair",
  "For the eyes",
  "For the throat",
  "For lips",
  "For the respiratory tract",
  "For the stomach",
];

function Filters() {
  return (
    <div className="rounded-xl border border-[#E8ECEF] bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-[#EEF2F3] px-6 py-5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#24325B]">
          Filter
        </h3>
      </div>

      <div className="space-y-8 p-6">
        {/* Price */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-[15px] font-medium text-[#555]">
              Price
            </h4>

            <span className="text-[#9CA3AF]">
              ▼
            </span>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="from 2365"
              className="w-full rounded-md border border-[#E8ECEF] px-3 py-2 text-xs text-[#666] outline-none placeholder:text-[#C5CBD0]"
            />

            <input
              type="text"
              placeholder="up to 865878"
              className="w-full rounded-md border border-[#E8ECEF] px-3 py-2 text-xs text-[#666] outline-none placeholder:text-[#C5CBD0]"
            />
          </div>

          {/* Slider */}
          <div className="relative mt-6 h-[6px] rounded-full bg-[#E9ECEF]">
            <div className="absolute left-[8%] right-[18%] h-[6px] rounded-full bg-gradient-to-r from-[#31D4B5] to-[#F7C623]" />

            <div className="absolute left-[8%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#31D4B5] bg-white" />

            <div className="absolute right-[18%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#F7C623] bg-white" />
          </div>

          <div className="mt-3 flex justify-between text-[11px] text-[#9CA3AF]">
            <span>2365</span>

            <span>865878</span>
          </div>
        </div>

        {/* Country */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-[15px] font-medium text-[#555]">
              Country
            </h4>

            <span className="text-[#9CA3AF]">
              ▼
            </span>
          </div>

          <div className="space-y-3">
            {countries.map((country) => (
              <label
                key={country}
                className="flex cursor-pointer items-center gap-3 text-sm text-[#666]"
              >
                <input
                  type="checkbox"
                  defaultChecked={country === "Italy"}
                  className="h-4 w-4 rounded border-gray-300 accent-[#31D4B5]"
                />

                {country}
              </label>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-[15px] font-medium text-[#555]">
              Impact
            </h4>

            <span className="text-[#9CA3AF]">
              ▼
            </span>
          </div>

          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border border-[#E8ECEF] py-2 pl-3 pr-10 text-sm outline-none placeholder:text-[#C5CBD0]"
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
              🔍
            </span>
          </div>

          <div className="space-y-3">
            {impacts.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 text-sm text-[#666]"
              >
                <input
                  type="checkbox"
                  defaultChecked={
                    item === "For the respiratory tract"
                  }
                  className="h-4 w-4 rounded border-gray-300 accent-[#31D4B5]"
                />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-[15px] font-medium text-[#555]">
              Availability
            </h4>

            <span className="text-[#9CA3AF]">
              ▼
            </span>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-3 text-sm text-[#31D4B5]">
              <input
                type="radio"
                name="availability"
                defaultChecked
                className="accent-[#31D4B5]"
              />

              In stock
            </label>

            <label className="flex items-center gap-3 text-sm text-[#666]">
              <input
                type="radio"
                name="availability"
                className="accent-[#31D4B5]"
              />

              To order
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-md bg-[#31D4B5] py-3 text-sm font-semibold text-white transition hover:bg-[#28BEA4]">
            Show
          </button>

          <button className="flex-1 rounded-md border border-[#E8ECEF] py-3 text-sm font-semibold text-[#777] transition hover:bg-[#F8F8F8]">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;