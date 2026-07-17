

import Container from "../../../components/common/Container";
import ProductInformation from "./ProductInformation";
import ReviewsSection from "./ReviewsSection";

function ProductInformationSection() {
  return (
    <section className="py-16">
      <Container className="max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductInformation />

          <ReviewsSection />
        </div>
      </Container>
    </section>
  );
}

export default ProductInformationSection;