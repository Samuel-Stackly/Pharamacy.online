import Container from "../common/Container";

const categories = [
  "Medicines",
  "Vitamins & Dietary Supplements",
  "Hygiene",
  "Lenses",
  "Mother and Child",
  "Medical Products",
  "Pet Supplies",
  "Medical Equipment",
];

function CategoryNav() {
  return (
    <div className="bg-gradient-to-r from-[#15308F] to-[#22D0B5]">
      <Container>
        <div className="flex h-14 items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((item) => (
            <button
              key={item}
              className="flex-shrink-0 text-sm font-medium uppercase tracking-wide text-white transition hover:text-gray-200"
            >
              {item}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategoryNav;