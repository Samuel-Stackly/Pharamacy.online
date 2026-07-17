import Button from "../../../components/common/Button";

import product1 from "../../../assets/images/home/pr-1.svg";
import product2 from "../../../assets/images/home/pr-2.svg";
import product3 from "../../../assets/images/home/pr-3.svg";
import product4 from "../../../assets/images/home/pr-4.svg";

const products = [
  {
    image: product1,
    name: "Welson tablets are covered. captivity. about. 3 mg, 30 pcs.",
    price: "RUB 41,108",
    oldPrice: "RUB 49,999",
  },
  {
    image: product2,
    name: "Welson tablets are covered. captivity. about. 3 mg, 30 pcs.",
    price: "RUB 41,108",
    oldPrice: "RUB 49,999",
  },
  {
    image: product3,
    name: "Welson tablets are covered. captivity. about. 3 mg, 30 pcs.",
    price: "RUB 41,108",
    oldPrice: "RUB 49,999",
  },
  {
    image: product4,
    name: "Welson tablets are covered. captivity. about. 3 mg, 30 pcs.",
    price: "RUB 41,108",
    oldPrice: "RUB 49,999",
  },
];

function OrdersTab() {
  return (
    <section className="mt-20">
      <h2 className="text-5xl font-bold text-[#24325B]">
        Your orders
      </h2>

      <div className="mt-10 rounded-[32px] bg-white p-10 shadow-xl shadow-[#00000008]">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-10">
            <span className="font-semibold">
              12/16/2021
            </span>

            <span className="text-[#666]">
              Order No.:154544516
            </span>
          </div>

          <span className="font-semibold text-[#31D4B5]">
            Done
          </span>
        </div>

        <div className="space-y-8">
          {products.map((item) => (
            <div
              key={item.name}
              className="grid items-center gap-6 md:grid-cols-[90px_1fr_180px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-24 rounded-lg bg-[#F8F8F8] object-contain"
              />

              <div>
                <h3 className="text-lg text-[#303030]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[#999]">
                  1 product
                </p>
              </div>

              <div className="text-right">
                <h3 className="text-3xl font-bold text-[#4B5563]">
                  {item.price}
                </h3>

                <p className="text-[#FF6B6B] line-through">
                  {item.oldPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Button className="w-full">
            Leave feedback
          </Button>

          <button className="h-14 rounded-full border-2 border-[#31D4B5] font-semibold uppercase text-[#303030] transition hover:bg-[#31D4B5] hover:text-white">
            Repeat order
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrdersTab;