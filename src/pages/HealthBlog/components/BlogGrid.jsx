import { Link } from "react-router-dom";

import { blogPosts } from "../../Home/HealthBlog/blogData";

function BlogGrid() {
  const repeatedPosts = Array.from(
    { length: 24 },
    (_, index) => blogPosts[index % blogPosts.length]
  );

  return (
    <section className="mt-14">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {repeatedPosts.map((post, index) => (
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
                  className="h-[190px] w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-7 text-[#303030] transition group-hover:text-[#31D4B5]">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#777777]">
                {post.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;