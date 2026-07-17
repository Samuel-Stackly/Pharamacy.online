
import PopularBrands from "./PopularBrands";
import SortBar from "./SortBar";



import Promotions from "../../Promotions/Promotions";
import Features from "../../Features/Features";
import Catalog from "./Catalog";
import SeoText from "./SeoText";

function Content() {
  return (
    <div className="space-y-8">
      <Catalog />

      <PopularBrands />

      <SortBar />

      <Promotions showHeader={false} rows={1} />

      <Features />

      <Promotions showHeader={false} rows={1} />

      <Promotions showHeader={false} rows={1} />

       
      <SeoText />
    </div>
  );
}

export default Content;