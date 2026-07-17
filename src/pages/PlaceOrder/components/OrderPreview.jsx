import { ChevronDown } from "lucide-react";

import { cartItems } from "../../Cart/cartData";

function OrderPreview() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#303030]">
          Your order
        </h2>

        <button className="text-[#777] transition hover:text-[#31D4B5]">
          <ChevronDown size={20} />
        </button>
      </div>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#FCFCFC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-12 object-contain"
                />
              </div>

              <h3 className="max-w-[520px] text-lg text-[#3B3B3B]">
                {item.title}
              </h3>
            </div>

            <div className="text-right">
              <h4 className="text-2xl font-bold text-[#4A5568]">
                {item.price}
              </h4>

              <p className="text-xs text-[#F15A29] line-through">
                {item.oldPrice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderPreview;