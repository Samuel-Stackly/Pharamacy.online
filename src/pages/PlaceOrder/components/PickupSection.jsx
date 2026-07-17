import {
  MapPin,
  Search,
  Clock3,
} from "lucide-react";

import map from "../../../assets/images/home/map.png";

import PharmacyTable from "./PharmacyTable";

import { cities } from "./pickupData";

function PickupSection() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-[#303030]">
        Pickup
      </h2>

      <h3 className="mt-8 text-lg font-semibold text-[#303030]">
        Select city
      </h3>

      {/* Search */}

      <div className="relative mt-5">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#B8B8B8]"
        />

        <input
          type="text"
          placeholder="Find your city..."
          className="w-full rounded-full border border-[#DDE5EA] py-4 pl-14 pr-6 outline-none transition focus:border-[#31D4B5]"
        />
      </div>

      {/* Cities */}

      <div className="mt-8 grid grid-cols-2 gap-y-3 text-sm md:grid-cols-4">
        {cities.map((city) => (
          <button
            key={city}
            className="w-fit text-left text-[#666] transition hover:text-[#31D4B5]"
          >
            {city}
          </button>
        ))}
      </div>

      {/* Map */}

      <div className="mt-10 overflow-hidden rounded-3xl">
        <img
          src={map}
          alt="Map"
          className="h-[380px] w-full object-cover"
        />
      </div>

      {/* Filters */}

      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-full bg-[#31D4B5] px-6 py-3 text-sm font-semibold text-white">
          All pharmacies
        </button>

        <button className="flex items-center gap-2 rounded-full border border-[#DDE5EA] px-6 py-3 text-sm transition hover:border-[#31D4B5]">
          <Clock3 size={16} />
          Pick up within an hour
        </button>

        <button className="rounded-full border border-[#DDE5EA] px-6 py-3 text-sm transition hover:border-[#31D4B5]">
          Today
        </button>
      </div>

      {/* Pharmacy Table */}

      <PharmacyTable />

      {/* Button */}

      <button className="mt-8 w-full rounded-lg bg-[#31D4B5] py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
        Show All Addresses
      </button>
    </div>
  );
}

export default PickupSection;