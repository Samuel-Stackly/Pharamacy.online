import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import Features from "../Home/sections/Features/Features";

import BlogCategories from "./components/BlogCategories";
import BlogGrid from "./components/BlogGrid";
import BlogPagination from "./components/BlogPagination";
import BlogSearch from "./components/BlogSearch";
import BlogTags from "./components/BlogTags";
import FeaturedBlog from "./components/FeaturedBlog";

function HealthBlogPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Health Blog" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
          Health Blog
        </h1>

        <BlogCategories />

        <BlogSearch />

        <BlogTags />

        <FeaturedBlog />

        <BlogGrid />

        <BlogPagination />
      </Container>

      <Features />
    </section>
  );
}

export default HealthBlogPage;