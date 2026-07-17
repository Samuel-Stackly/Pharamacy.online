import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Features from "../Home/sections/Features/Features";

import LicenseContent from "./components/LicenseContent";

function LicensePage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Our license" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
          Our license
        </h1>

        <LicenseContent />
      </Container>

      <Features />
    </section>
  );
}

export default LicensePage;