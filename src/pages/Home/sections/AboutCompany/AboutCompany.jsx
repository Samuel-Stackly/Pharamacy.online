import { Circle, Info } from "lucide-react";

import Container from "../../../../components/common/Container";

import { aboutColumns } from "./aboutData";

function AboutCompany() {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <h2 className="mb-12 text-4xl font-bold text-[#303030]">
          About the company
        </h2>

        {/* Three Columns */}
        <div className="grid gap-10 lg:grid-cols-3">
          {aboutColumns.map((column, index) => (
            <div key={index} className="space-y-8">
              {column.map((paragraph, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                >
                  <Circle
                    size={8}
                    className="mt-2 shrink-0 fill-[#31D4B5] text-[#31D4B5]"
                  />

                  <p className="text-[15px] leading-8 text-[#666]">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Paragraph */}
        <p className="mt-12 text-[15px] leading-8 text-[#666]">
          The activities of our company are based on providing professional
          kitchen equipment to catering establishments of any format:
          hotels, hotels and hostels, hypermarkets, canteens,
          kindergartens and schools. The speed of preparing dishes of any
          complexity and the quality of work of your cooks depend on the
          quality of the equipment. We offer you high-quality equipment
          for your business: heating, refrigeration, laundry, coffee,
          bar, fast food, neutral.
        </p>

        {/* Highlight Box */}
        <div className="mt-10 flex items-start gap-5 rounded-xl bg-gradient-to-r from-[#F6F8FA] to-[#F3FBFB] p-8">
          <Info
            size={22}
            className="mt-1 text-[#31D4B5]"
          />

          <p className="text-[15px] leading-8 text-[#666]">
            The activities of our company are based on providing
            professional kitchen equipment to catering establishments of
            any format: hotels, hotels and hostels, hypermarkets,
            canteens, kindergartens and schools. We offer high-quality
            equipment for your business.
          </p>
        </div>

        {/* Bottom Paragraph */}
        <p className="mt-10 text-[15px] leading-8 text-[#666]">
          The activities of our company are based on providing
          professional kitchen equipment to catering establishments of
          any format: hotels, hotels and hostels, hypermarkets,
          canteens, kindergartens and schools. The speed of preparing
          dishes of any complexity and the quality of work of your cooks
          depend on the quality of the equipment.
        </p>

        {/* Show More */}
        <button className="mt-12 text-sm font-semibold uppercase tracking-wide text-[#31D4B5] transition hover:text-[#24B89D]">
          Show Full Text
        </button>
      </Container>
    </section>
  );
}

export default AboutCompany;