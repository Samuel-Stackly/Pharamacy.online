import { product } from "../productData";

function ProductGallery() {
  return (
    <div className="grid gap-5 lg:grid-cols-[90px_1fr] lg:col-span-2">
      {/* Left thumbnails */}
      <div className="flex flex-row gap-4 lg:flex-col">
        {product.images.map((image, index) => (
          <button
            key={index}
            className={`overflow-hidden rounded-xl border p-2 transition ${
              index === 0
                ? "border-[#31D4B5]"
                : "border-[#E8ECEF]"
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-16 w-16 object-contain"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex items-center justify-center rounded-3xl border border-[#E8ECEF] bg-white p-12">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[420px] object-contain"
        />
      </div>
    </div>
  );
}

export default ProductGallery;