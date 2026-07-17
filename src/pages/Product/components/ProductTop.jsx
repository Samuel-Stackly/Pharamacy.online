import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import PriceCard from "./PriceCard";

function ProductTop() {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[120px_420px_1fr_320px]">
      <ProductGallery />

      <ProductInfo />

      <PriceCard />
    </div>
  );
}

export default ProductTop;