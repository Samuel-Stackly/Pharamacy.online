import HeroContent from "./HeroBanner";
import HeroImage from "./HeroImage";
import FeaturedCard from "./FeaturedCard";
import ProductList from "./ProductList";
import Container from "../../../../components/common/Container";

function Hero() {
  return (
    <section className="bg-[#F6FBFD] py-6 lg:py-0">
      <Container className="max-w-[1500px] px-4 lg:px-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr]">
          <div className="flex justify-center lg:block">
            <HeroContent />
          </div>

          <div className="flex justify-center items-center">
            <HeroImage />
          </div>

          <div className="flex justify-center items-center">
            <FeaturedCard />
          </div>

          <div className="flex justify-center lg:block">
            <ProductList />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;