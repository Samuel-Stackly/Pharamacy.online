import { ChevronRight, Star } from "lucide-react";

import Container from "../../../../components/common/Container";

import { reviews } from "./reviewsData";

function Reviews() {
  return (
    <section className="py-16">
      <Container className="max-w-[1300px]">
        <div className="rounded-[20px] bg-[#F5FBFB] p-8 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
            {/* Left Card */}
            <div className="rounded-xl bg-white p-10 shadow-xl shadow-[#C8D7D8]/30">
              <div className="flex items-start justify-between">
                <h2 className="max-w-[150px] text-[22px] font-bold leading-9 text-[#333]">
                  Average assessment pharmacies
                </h2>

                <div className="text-right">
                  <h3 className="text-6xl font-bold text-[#333]">
                    4.8
                  </h3>

                  <div className="mt-2 flex justify-end gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#FFC542] text-[#FFC542]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-10 text-center text-[18px] leading-8 text-[#666]">
                Overall rating based on 4349 reviews
                <br />
                from our customers
              </p>

              <button className="mx-auto mt-12 flex rounded-full bg-[#31D4B5] px-10 py-4 text-sm font-semibold uppercase text-white shadow-xl shadow-[#31D4B5]/30 transition hover:bg-[#24b89d]">
                Leave a Review
              </button>
            </div>

            {/* Reviews */}
            <div className="space-y-10">
              {reviews.map((item, index) => (
                <div key={index}>
                  <div className="mb-3 flex items-center gap-8">
                    <h3 className="text-2xl font-bold text-[#333]">
                      {item.name}, {item.location}, {item.date}
                    </h3>

                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-[#FFC542] text-[#FFC542]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="max-w-[900px] text-[17px] leading-8 text-[#555]">
                    {item.review}
                  </p>
                </div>
              ))}

              <button className="flex items-center gap-2 font-semibold uppercase tracking-wide text-[#31D4B5]">
                <ChevronRight size={18} />

                All 4349 Reviews
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Reviews;