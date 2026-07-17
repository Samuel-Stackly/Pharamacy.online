import { Plus, Equal } from "lucide-react";



import { bundleProducts } from "./bundleData";
import BundleCard from "./BundleCard";
import BundleSummary from "./BundleSummary";
import Container from "../../../components/common/Container";

function PleaseNote() {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <h2 className="mb-10 text-4xl font-bold text-[#303030]">
          Please note
        </h2>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <BundleCard product={bundleProducts[0]} />

          <div className="rounded-full bg-[#F7FBFB] p-5">
            <Plus
              size={36}
              className="text-[#31D4B5]"
            />
          </div>

          <BundleCard product={bundleProducts[1]} />

          <div className="rounded-full bg-[#F7FBFB] p-5">
            <Equal
              size={36}
              className="text-[#31D4B5]"
            />
          </div>

          <BundleSummary />
        </div>
      </Container>
    </section>
  );
}

export default PleaseNote;