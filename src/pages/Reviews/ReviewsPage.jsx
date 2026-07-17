import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import RatingSummary from "./components/RatingSummary";
import ReviewList from "./components/ReviewList";

function ReviewsPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Reviews about us" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#303030]">
          Reviews about us
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[320px_1fr]">
          <RatingSummary />

          <ReviewList />
        </div>
      </Container>
    </section>
  );
}

export default ReviewsPage;