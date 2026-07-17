import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

function PromotionCard({ product }) {
  return (
    <Link to="/product/1" className="block">
      <div className="flex h-[380px] flex-col rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-lg">
        {/* Image */}
        <div className="relative flex h-[140px] items-center justify-center rounded-lg bg-[#FCFCFC]">
          <span className="absolute left-2 top-2 rounded-full bg-[#31D4B5] px-2 py-1 text-[9px] font-medium text-white">
            Product of the day
          </span>

          <img
            src={product.image}
            alt={product.title}
            className="max-h-[95px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-1 flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span
              className={`text-[11px] font-medium ${
                product.stock === "In stock"
                  ? "text-[#22B573]"
                  : "text-[#F15A29]"
              }`}
            >
              {product.stock}
            </span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  className="fill-[#FFC542] text-[#FFC542]"
                />
              ))}
            </div>
          </div>

          <h3 className="min-h-[48px] text-[14px] font-medium leading-5 text-[#3B3B3B] transition hover:text-[#31D4B5]">
            {product.title}
          </h3>

          <ul className="mt-3 space-y-1 text-[11px] text-[#B8B8B8]">
            <li>• Brand: {product.brand}</li>
            <li>• Quantity: {product.quantity}</li>
            <li>• Code: {product.code}</li>
          </ul>

          <div className="mt-auto flex items-end justify-between pt-4">
            <div>
              <h2 className="text-[22px] font-bold text-[#4A5568]">
                {product.price}
              </h2>

              <p className="text-xs font-medium text-[#F15A29] line-through">
                {product.oldPrice}
              </p>
            </div>

            <button
              onClick={(e) => e.preventDefault()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#31D4B5] text-white transition hover:bg-[#25b79c]"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PromotionCard;