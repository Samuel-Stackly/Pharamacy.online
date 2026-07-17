import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { blogPosts } from "./blogData";
import Container from "../../../components/common/Container";

function HealthBlog() {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <div className="mb-10 flex flex-wrap items-center gap-8">
          <Link to="/health">
            <h2 className="text-5xl font-bold text-[#24325B] transition hover:text-[#31D4B5]">
              Health Blog
            </h2>
          </Link>

          <button className="flex items-center gap-2 text-sm font-medium text-[#31D4B5] transition hover:text-[#25B79C]">
            <ChevronRight size={16} />
            Latest Posts
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${index + 1}`}
              className="group block"
            >
              <article>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[240px] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 text-[28px] font-semibold leading-9 text-[#303030] transition group-hover:text-[#31D4B5] lg:text-[22px]">
                  {post.title}
                </h3>

                <p className="mt-4 text-[15px] leading-8 text-[#7A7A7A]">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HealthBlog;