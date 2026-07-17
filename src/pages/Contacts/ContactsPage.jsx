import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Features from "../Home/sections/Features/Features";

import CallbackForm from "./components/CallbackForm";
import CompanyDetails from "./components/CompanyDetails";
import ContactInfo from "./components/ContactInfo";
import Directions from "./components/Directions";
import PartnersInfo from "./components/PartnersInfo";
import SocialCard from "./components/SocialCard";

function ContactsPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Contacts" },
          ]}
        />

        <h1 className="mt-4 text-5xl font-bold text-[#24325B]">
          Contacts
        </h1>

        <div className="mt-12 grid gap-10 xl:grid-cols-[2fr_0.9fr_1fr_1.2fr]">
          <ContactInfo />

          <SocialCard />

          <CompanyDetails />

          <CallbackForm />
        </div>
      </Container>


      <Features />

      <Directions />

<PartnersInfo />
    </section>
  );
}

export default ContactsPage;