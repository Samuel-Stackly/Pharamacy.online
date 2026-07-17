import { Star } from "lucide-react";

import { products } from "./heroData";

function ProductList() {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div
          key={product.title}
          className="relative rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          {/* Badge */}
          <span className="absolute left-5 top-4 rounded-full bg-[#F25555] px-3 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>

          <div className="mt-6 flex items-center gap-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-20 w-20 object-contain"
            />

            <div className="flex-1">
              <p className="text-sm leading-5 text-[#555]">
                {product.title}
              </p>

              <h4 className="mt-3 text-xl font-bold text-[#222]">
                {product.price}
              </h4>

              <div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-[#FFC542] text-[#FFC542]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;