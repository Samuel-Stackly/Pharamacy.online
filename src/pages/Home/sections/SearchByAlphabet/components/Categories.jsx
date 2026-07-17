const categories = [
  "Obstetrics, gynecology",
  "Allergy",
  "Anesthesia and resuscitation",
  "Antibiotics",
  "Blood diseases",
  "Pain, temperature",
  "Hemorrhoids",
  "Eyes",
  "Worms, lice",
  "Homeopathy",
  "Diabetes",
  "Diagnostic tools",
  "Respiratory system",
  "Stomach, intestines",
];

function Categories() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#E8ECEF] bg-white">
      <div className="border-b bg-[#F9FBFB] px-5 py-4">
        <h3 className="text-sm font-bold uppercase text-[#24325B]">
          Categories
        </h3>
      </div>

      <ul>
        {categories.map((item) => (
          <li
            key={item}
            className="border-b px-5 py-3 text-sm text-[#666] transition hover:bg-[#F8FCFC]"
          >
            {item}
          </li>
        ))}

        <li className="bg-[#31D4B5] px-5 py-4 text-sm font-semibold uppercase text-white cursor-pointer">
          Show All Categories
        </li>
      </ul>
    </div>
  );
}

export default Categories;