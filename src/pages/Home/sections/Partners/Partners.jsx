import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "../../../../components/common/Container";

import { partners } from "./partnersData";

function Partners() {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-[#303030]">
            Our partners
          </h2>

          <div className="flex gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] transition hover:bg-[#31D4B5] hover:text-white">
              <ChevronLeft size={20} />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E5E5] transition hover:bg-[#31D4B5] hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex h-[70px] items-center justify-center rounded-xl bg-white transition hover:shadow-lg"
            >
              <img
                src={partner}
                alt="Partner"
                className="max-h-[40px] max-w-[140px] object-contain grayscale transition hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Partners;