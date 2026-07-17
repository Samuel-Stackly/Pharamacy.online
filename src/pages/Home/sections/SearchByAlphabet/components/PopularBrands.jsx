import { brands } from "./brandsData";

function PopularBrands() {
  return (
    <div className="mt-8">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-[#303030]">
        Popular Brands
      </h3>

      <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-4 lg:grid-cols-8">
        {brands.map((brand) => (
          <button
            key={brand}
            className="w-fit text-left text-sm text-[#666] transition hover:text-[#31D4B5]"
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PopularBrands;