import {
  Minus,
  Plus,
  Star,
  X,
} from "lucide-react";

function CartItem({ item }) {
  return (
    <div className="relative flex flex-col gap-6 rounded-2xl border border-[#EEF2F3] bg-white p-6 lg:flex-row lg:items-center">
      {/* Remove */}
      <button className="absolute right-5 top-5 text-[#999] transition hover:text-red-500">
        <X size={18} />
      </button>

      {/* Product Image */}
      <div className="flex h-[120px] w-[170px] items-center justify-center rounded-xl bg-[#FCFCFC]">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[90px] object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <div className="mb-2 flex items-center gap-4">
          <span className="text-sm font-medium text-[#22B573]">
            {item.stock}
          </span>

          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                className="fill-[#FFC542] text-[#FFC542]"
              />
            ))}
          </div>
        </div>

        <h3 className="max-w-[520px] text-[22px] font-medium leading-8 text-[#3B3B3B]">
          {item.title}
        </h3>

        <ul className="mt-4 space-y-1 text-sm text-[#B5B5B5]">
          <li>• Brand: {item.brand}</li>
          <li>• Quantity per package: {item.quantity}</li>
          <li>• Product code: {item.code}</li>
        </ul>
      </div>

      {/* Price */}
      <div className="text-center">
        <h2 className="text-[38px] font-bold text-[#4A5568]">
          {item.price}
        </h2>

        <p className="text-sm font-medium text-[#F15A29] line-through">
          {item.oldPrice}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-center gap-4">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDE7E7] text-[#E56B6B] transition hover:bg-[#F9D3D3]">
          <Minus size={16} />
        </button>

        <span className="text-lg font-semibold text-[#303030]">
          {item.count}
        </span>

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#31D4B5] text-white transition hover:bg-[#28BEA4]">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;