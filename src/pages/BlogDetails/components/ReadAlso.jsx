import { Link2 } from "lucide-react";

const articles = [
  "Silver ions in the treatment of wounds and burns",
  "How does hormonal balance allow you to stay young and beautiful?",
  "Active life without hot flashes - everything is in your hands",
  "Traveler's first aid kit: what to do if your joints suddenly hurt?",
];

function ReadAlso() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-[#24325B]">
        Read also
      </h2>

      <div className="mt-8 space-y-6">
        {articles.map((article) => (
          <button
            key={article}
            className="flex items-start gap-4 text-left transition hover:text-[#31D4B5]"
          >
            <Link2
              size={18}
              className="mt-1 shrink-0 text-[#31D4B5]"
            />

            <span className="text-lg leading-8 text-[#555]">
              {article}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ReadAlso;