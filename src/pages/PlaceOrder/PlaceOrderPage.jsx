import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import CartSummary from "../Cart/components/CartSummary";
import Features from "../Home/sections/Features/Features";

import ContactDetails from "./components/ContactDetails";
import OrderPreview from "./components/OrderPreview";
import DeliverySection from "./components/DeliverySection";
import PickupSection from "./components/PickupSection";
import PaymentMethod from "./components/PaymentMethod";
import ConfirmOrder from "./components/ConfirmOrder";

function PlaceOrderPage() {
  return (
    <section className="bg-[#F6FBFD] py-6 lg:py-8">
      <Container className="max-w-[1400px] px-4 sm:px-6">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Place the order" },
          ]}
        />

        <h1 className="mt-4 text-3xl font-bold text-[#303030] sm:text-4xl lg:text-5xl">
          Place the order
        </h1>

        <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-10">
          {/* Left */}
          <div className="min-w-0 space-y-8 lg:space-y-10">
            <ContactDetails />

            <OrderPreview />

            <DeliverySection />

            <PickupSection />

            <PaymentMethod />

            <ConfirmOrder />
          </div>

          {/* Right */}
          <aside className="min-w-0">
            <CartSummary />
          </aside>
        </div>
      </Container>

      <Features />
    </section>
  );
}

export default PlaceOrderPage;