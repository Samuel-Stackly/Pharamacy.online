import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
} from "lucide-react";

import { product } from "../productData";

function PriceCard() {
  return (
    <div className="sticky top-6 rounded-[24px] border border-[#E8ECEF] bg-white p-6 shadow-sm">
      {/* Price */}
      <div>
        <p className="text-sm text-[#9CA3AF] line-through">
          {product.oldPrice}
        </p>

        <h2 className="mt-2 text-4xl font-bold text-[#24325B]">
          {product.price}
        </h2>
      </div>

      {/* Quantity */}
      <div className="mt-8 flex items-center justify-between rounded-xl border border-[#E8ECEF] px-4 py-3">
        <button className="text-[#666] transition hover:text-[#31D4B5]">
          <Minus size={18} />
        </button>

        <span className="text-lg font-semibold">
          1
        </span>

        <button className="text-[#666] transition hover:text-[#31D4B5]">
          <Plus size={18} />
        </button>
      </div>

      {/* Add to cart */}
      <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#31D4B5] py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
        <ShoppingCart size={18} />
        Add to cart
      </button>

      {/* Wishlist */}
      <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-[#E8ECEF] py-4 text-sm font-semibold uppercase text-[#555] transition hover:bg-[#F7FBFB]">
        <Heart size={18} />
        Add to favorites
      </button>

      {/* Delivery */}
      <div className="mt-8 rounded-xl bg-[#F8FCFC] p-4">
        <div className="flex items-start gap-3">
          <Truck
            size={22}
            className="mt-1 text-[#31D4B5]"
          />

          <div>
            <h4 className="font-semibold text-[#24325B]">
              Free delivery
            </h4>

            <p className="mt-2 text-sm leading-6 text-[#777]">
              Free delivery for orders over ₹999.
              Delivery within 2–5 business days.
            </p>
          </div>
        </div>
      </div>

      {/* Secure Purchase */}
      <div className="mt-5 rounded-xl bg-[#FFF8E8] p-4">
        <p className="text-sm leading-6 text-[#666]">
          ✔ 100% genuine products
          <br />
          ✔ Secure payment
          <br />
          ✔ Easy returns
        </p>
      </div>
    </div>
  );
}

export default PriceCard;