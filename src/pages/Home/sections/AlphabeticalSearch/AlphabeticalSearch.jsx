import Container from "../../../../components/common/Container";
import HealthBlog from "../../HealthBlog/HealthBlog";
import { categories } from "./alphabeticalData";
import { Link } from "react-router-dom";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = [...Array(10)].map((_, i) => i);

function AlphabeticalSearch() {
  const featured = categories.find((item) => item.featured);
  const others = categories.filter((item) => !item.featured);

  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <div className="relative">
          <div className="flex flex-wrap items-center gap-8">
            <Link
              to="/alphabetical-search"
              className="text-4xl font-bold text-[#333] hover:text-[#31D4B5] transition"
            >
              Alphabetical search
            </Link>

            <button className="text-[#31D4B5]">
              Selecting a product by disease
            </button>
          </div>

          <div className="pointer-events-none absolute right-0 top-0 text-[140px] font-bold text-[#31D4B5]/10">
            A-Z
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-[#31D4B5]">
          {letters.map((letter, index) => (
            <Link
              to={`/search-by-alphabet/${letter}`}
            >
              {letter}
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-6 text-sm text-[#777]">
          {numbers.map((number) => (
            <button key={number}>{number}</button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_3fr]">
          {/* Left Featured Card */}
          <div className="rounded-2xl bg-[#F8FCFC] p-6">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={featured.icon}
                alt={featured.title}
                className="h-8 w-8"
              />

              <h3 className="text-xl font-semibold text-[#24325B]">
                {featured.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {featured.items.map((item, index) => (
                <li
                  key={item}
                  className={`text-sm ${index === featured.items.length - 1
                    ? "font-medium text-[#31D4B5]"
                    : "text-[#7C8896]"
                    }`}
                >
                  {index === featured.items.length - 1 ? "» " : "– "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl bg-[#F8FCFC] p-6"
              >
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="h-8 w-8"
                  />

                  <h3 className="font-semibold text-[#24325B]">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li
                      key={item}
                      className={`text-sm ${index === category.items.length - 1
                        ? "font-medium text-[#31D4B5]"
                        : "text-[#7C8896]"
                        }`}
                    >
                      {index === category.items.length - 1
                        ? "» "
                        : "– "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <HealthBlog />
    </section>
  );
}

export default AlphabeticalSearch;