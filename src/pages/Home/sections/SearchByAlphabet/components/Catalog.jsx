import { catalogItems } from "./catalogData";

function Catalog() {
  return (
    <div>
      <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-[#303030]">
        Catalog
      </h3>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {catalogItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-lg border border-[#E8ECEF] bg-white px-4 py-3 transition hover:border-[#31D4B5]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-10 w-10 object-contain"
            />

            <span className="text-sm text-[#444]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;