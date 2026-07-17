import { Search } from "lucide-react";

import { cities } from "../deliveryData";

function CitySelector() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#303030]">
        Select city
      </h3>

      {/* Search */}

      <div className="relative mt-6">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#BFC6CF]"
        />

        <input
          type="text"
          placeholder="Find your city..."
          className="w-full rounded-full border border-[#DDE5EA] py-4 pl-14 pr-6 outline-none transition focus:border-[#31D4B5]"
        />
      </div>

      {/* Cities */}

      <div className="mt-8 grid gap-y-3 text-sm md:grid-cols-3 lg:grid-cols-6">
        {cities.map((city, index) => (
          <button
            key={index}
            className={`text-left transition hover:text-[#31D4B5] ${
              index < 6
                ? "font-medium text-[#31D4B5]"
                : "text-[#666]"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CitySelector;