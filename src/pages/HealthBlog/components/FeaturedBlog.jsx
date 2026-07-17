import { blogPosts } from "../../Home/HealthBlog/blogData";

function FeaturedBlog() {
  const featured = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 5);

  return (
    <section className="mt-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Left Featured */}
        <article>
          <div className="overflow-hidden rounded-xl">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-[420px] w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>

          <h2 className="mt-8 text-[42px] font-bold leading-tight text-[#303030]">
            {featured.title}
          </h2>

          <p className="mt-6 text-[15px] leading-8 text-[#777777]">
            {featured.description}
          </p>
        </article>

        {/* Right Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {sidePosts.map((post) => (
            <article key={post.image}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[170px] w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-7 text-[#303030]">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#777777]">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlog;