import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Features from "../Home/sections/Features/Features";

import AboutContent from "./components/AboutContent";
import HistorySection from "./components/HistorySection";
import TodayPharmacy from "./components/TodayPharmacy";

function AboutPage() {
  return (
    <section className="p-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "About the company" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
          About the company
        </h1>

        <AboutContent />
      </Container>

      <Features />

      <HistorySection />
      <TodayPharmacy />
    </section>
  );
}

export default AboutPage;