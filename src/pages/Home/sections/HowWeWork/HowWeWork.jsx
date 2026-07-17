import Container from "../../../../components/common/Container";

import { workSteps } from "./workData";

function HowWeWork() {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <h2 className="mb-10 text-4xl font-bold text-[#303030]">
          How do we work?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {workSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex items-start gap-5"
            >
              {/* Dashed Line */}
              {index !== workSteps.length - 1 && (
                <div className="absolute left-[74px] top-6 hidden h-[2px] w-[140px] border-t-2 border-dashed border-[#38D8B9] lg:block" />
              )}

              {/* Icon */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-14 w-14 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#38D8B9] text-[10px] font-semibold text-[#38D8B9]">
                    ✓
                  </span>

                  <h3 className="text-lg font-semibold text-[#303030]">
                    {step.title}
                  </h3>
                </div>

                <p className="max-w-[220px] text-sm leading-6 text-[#8A8A8A]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowWeWork;