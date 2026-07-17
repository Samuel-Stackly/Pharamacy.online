import Container from "../common/Container";

const tags = [
  {
    title: "Promotions",
    bg: "bg-[#56C6F5]",
    text: "text-white",
  },
  {
    title: "Discounts",
    bg: "bg-[#FFA533]",
    text: "text-white",
  },
  {
    title: "COVID-19",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
  {
    title: "Allergies",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
  {
    title: "Medical cosmetics",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
  {
    title: "Intestines",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
  {
    title: "Thrush",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
  {
    title: "Joints",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
  {
    title: "52 more",
    bg: "bg-[#F5F5F5]",
    text: "text-[#666]",
  },
];

function TagsBar() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">
          {tags.map((tag) => (
            <button
              key={tag.title}
              className={`${tag.bg} ${tag.text} flex-shrink-0 rounded-md px-4 py-2 text-xs font-medium transition hover:opacity-90`}
            >
              {tag.title}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TagsBar;