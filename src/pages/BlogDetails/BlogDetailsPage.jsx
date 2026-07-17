import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import PleaseNote from "../Product/components/PleaseNote";
import ReviewForm from "../Product/components/ReviewForm";
import ArticleContent from "./components/ArticleContent";
import ArticleHighlight from "./components/ArticleHighlight";
import ArticleShare from "./components/ArticleShare";
import ArticleSteps from "./components/ArticleSteps";
import ArticleTableSection from "./components/ArticleTableSection";
import ArticleVideoSection from "./components/ArticleVideoSection";

import BlogHero from "./components/BlogHero";
import BlogMeta from "./components/BlogMeta";
import CommentsSection from "./components/CommentsSection";
import ReadAlso from "./components/ReadAlso";
import TableOfContents from "./components/TableOfContents";

function BlogDetailsPage() {
    return (
        <section className="p-10">
            <Container className="max-w-[1500px]">
                <Breadcrumb
                    items={[
                        { label: "Home", path: "/" },
                        { label: "Medicines", path: "/search" },
                        {
                            label: "Enzyme-containing preparations",
                            path: "/category",
                        },
                        {
                            label: "Irritable bowel",
                        },
                    ]}
                />

                <BlogHero />


                <BlogMeta />
            </Container>

            <div className="mt-12 grid gap-10 lg:grid-cols-[340px_1fr]">
                <div className="lg:sticky lg:top-8 lg:self-start">
                    <TableOfContents />
                </div>

                <ArticleContent />

            </div>

            <PleaseNote />
            <ArticleSteps />
            
            <ArticleSteps />

            <ArticleTableSection />

            <ArticleHighlight />

            <ArticleVideoSection />

            <ArticleShare />

<ReadAlso />

            <ReviewForm />

            <CommentsSection />
        </section>
    );
}

export default BlogDetailsPage;