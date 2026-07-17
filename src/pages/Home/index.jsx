import HealthBlog from "./HealthBlog/HealthBlog";
import AboutCompany from "./sections/AboutCompany/AboutCompany";
import AlphabeticalSearch from "./sections/AlphabeticalSearch/AlphabeticalSearch";
import Features from "./sections/Features/Features";
import Hero from "./sections/hero";
import HowWeWork from "./sections/HowWeWork/HowWeWork";
import Partners from "./sections/Partners/Partners";
import Promotions from "./sections/Promotions/Promotions";
import Reviews from "./sections/Reviews/Reviews";



function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Promotions />
      <HowWeWork />
      <Reviews />
      <Partners />
      <AboutCompany />
      <AlphabeticalSearch />
      <HealthBlog />
    </>
  );
}

export default Home;