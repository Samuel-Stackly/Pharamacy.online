const tags = [
  "Manufacturer",
  "Briefly about the product",
  "Composition",
  "Pharmacological action",
  "Indications",
  "Method of administration and doses",
  "Side effect",
  "Contraindications",
  "Overdose",
  "Special instructions",
  "Interaction",
  "Storage conditions",
  "Best before date",
];

function BlogTags() {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap gap-4">
        {tags.map((tag, index) => (
          <button
            key={tag}
            className={`rounded-full border px-6 py-3 text-sm font-medium transition ${
              index === 0
                ? "border-[#31D4B5] bg-[#31D4B5] text-white"
                : "border-[#DDE5EA] bg-white text-[#666666] hover:border-[#31D4B5] hover:text-[#31D4B5]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}

export default BlogTags;