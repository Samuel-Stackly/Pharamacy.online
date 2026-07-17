import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Promotions from "../Home/sections/Promotions/Promotions";

import ProductTabs from "./components/ProductTabs";
import ProductTop from "./components/ProductTop";
import PleaseNote from "./components/PleaseNote";
import ProductInformationSection from "./components/ProductInformationSection";
import DeliverySection from "./components/DeliverySection";
import SeoText from "../Home/sections/SearchByAlphabet/components/SeoText";
import HealthBlog from "../Home/HealthBlog/HealthBlog";

function ProductDetails() {
    return (
        <section className="py-8">
            <Container className="max-w-[1400px]">
                <Breadcrumb
                    items={[
                        { label: "Home", path: "/" },
                        { label: "Medicines", path: "/search" },
                        { label: "Enzyme-containing preparations" },
                        { label: "Irritable bowel" },
                    ]}
                />

                <h1 className="mt-4 text-5xl font-bold leading-tight text-[#303030]">
                    Creon 10000, capsules intestinal solution 10000 units 20 pcs.
                </h1>

                <ProductTabs />

                <ProductTop />

                <Promotions
                    title="Analogues"
                    rows={1}
                />

                <PleaseNote />

                <Promotions
                    title="Recommended Products"
                    rows={1}
                />
            </Container>

            <ProductInformationSection />

            <DeliverySection />
            <SeoText />
            <HealthBlog />
        </section>
    );
}

export default ProductDetails;