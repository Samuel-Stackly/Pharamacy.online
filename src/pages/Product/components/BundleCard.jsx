import { Star } from "lucide-react";

function BundleCard({ product }) {
  return (
    <div className="flex w-[250px] flex-col rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="flex h-[130px] items-center justify-center rounded-xl bg-[#FCFCFC]">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[90px] object-contain"
        />
      </div>

      {/* Stock + Rating */}
      <div className="mt-4 flex items-center justify-between">
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
              size={11}
              className="fill-[#FFC542] text-[#FFC542]"
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 min-h-[48px] text-[14px] font-medium leading-5 text-[#3B3B3B]">
        {product.title}
      </h3>

      {/* Price */}
      <div className="mt-5">
        <h4 className="text-[26px] font-bold text-[#4A5568]">
          {product.price}
        </h4>

        <p className="text-xs text-[#F15A29] line-through">
          {product.oldPrice}
        </p>
      </div>
    </div>
  );
}

export default BundleCard;