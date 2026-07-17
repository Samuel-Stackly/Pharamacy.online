import Container from "../../../../components/common/Container";
import { ArrowUp } from "lucide-react";

import { features } from "./featuresData";

function Features() {
  return (
    <section className="py-12">
      <Container className="max-w-[1500px]">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-12 w-12 object-contain"
              />

              <div className="max-w-[170px]">
                <h3 className="text-sm font-semibold text-[#222]">
                  {feature.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#777]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2ED0B3] text-white transition hover:bg-[#23b89f]">
            <ArrowUp size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Features;