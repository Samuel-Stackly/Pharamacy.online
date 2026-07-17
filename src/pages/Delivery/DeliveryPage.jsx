import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Features from "../Home/sections/Features/Features";

import CitySelector from "./components/CitySelector";
import DeliveryBanner from "./components/DeliveryBanner";
import DeliveryPricing from "./components/DeliveryPricing";
import DeliveryFeatures from "./components/DeliveryFeatures";
import DeliveryInfo from "./components/DeliveryInfo";
import ReturnPolicy from "./components/ReturnPolicy";
import PrescriptionCards from "./components/PrescriptionCards";
import PickupSection from "../PlaceOrder/components/PickupSection";


function DeliveryPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Delivery and pickup" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
          Delivery and pickup
        </h1>

        <div className="mt-10 space-y-14">
          <CitySelector />

          <DeliveryBanner />

          <DeliveryPricing />

          <DeliveryInfo />

          <ReturnPolicy />

          <PrescriptionCards />

          <PickupSection />
        </div>
      </Container>

      {/* <Features /> */}
    </section>
  );
}

export default DeliveryPage;