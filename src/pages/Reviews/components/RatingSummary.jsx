import { Check, Star } from "lucide-react";

import { reviewStats } from "../reviewsData";

function RatingSummary() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold leading-tight text-[#303030]">
              Average
              <br />
              assessment
              <br />
              pharmacies
            </h3>

            <p className="mt-8 text-sm leading-6 text-[#777]">
              Overall rating based on 4349 reviews
              from our customers
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-6xl font-bold text-[#303030]">
              4.8
            </h2>

            <div className="mt-3 flex justify-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="fill-[#FFC542] text-[#FFC542]"
                />
              ))}
            </div>
          </div>
        </div>

        <button className="mt-10 w-full rounded-full bg-[#31D4B5] py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
          Leave Feedback
        </button>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="space-y-5">
          {reviewStats.map((item, index) => (
            <div
              key={item.stars}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {index === 0 ? (
                  <Check
                    size={16}
                    className="text-[#31D4B5]"
                  />
                ) : (
                  <div className="h-4 w-4 rounded border border-[#D9D9D9]" />
                )}

                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-[#FFC542] text-[#FFC542]"
                    />
                  ))}
                </div>
              </div>

              <span className="text-sm text-[#777]">
                {item.count} reviews
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RatingSummary;