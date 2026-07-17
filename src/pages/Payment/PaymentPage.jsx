import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import Features from "../Home/sections/Features/Features";

// import PaymentSteps from "./components/PaymentSteps";
import InstallmentOptions from "./components/InstallmentOptions";
import HowWeWork from "../Home/sections/HowWeWork/HowWeWork";
import CashPayment from "./components/CashPayment";
import PaymentByCard from "./components/PaymentByCard";

function PaymentPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Payment" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
          Payment
        </h1>

        <p className="mt-6 max-w-6xl text-[15px] leading-8 text-[#777]">
          The network of social pharmacies STOLICHKI is part of the Neopharm
          pharmacy holding. The first pharmacy in Moscow was opened in 2000.
          Our mission from day one has been simple: make medicine affordable.
          We have shortened the path of medicines from manufacturer to consumer
          as much as possible.
        </p>

        <HowWeWork />

        <InstallmentOptions />

        <CashPayment />
        <PaymentByCard />
      </Container>


    </section>
  );
}

export default PaymentPage;