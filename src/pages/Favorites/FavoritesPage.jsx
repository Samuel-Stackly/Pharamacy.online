import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Features from "../Home/sections/Features/Features";
import PromotionCard from "../Home/sections/Promotions/PromotionCard";
import { promotions } from "../Home/sections/Promotions/promotionData";
import Promotions from "../Home/sections/Promotions/Promotions";


import FavoritesHeader from "./components/FavoritesHeader";

const favoriteProducts = [
  ...promotions,
  ...promotions,
];

function FavoritesPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Favorites" },
          ]}
        />

        <div className="mt-4">
          <FavoritesHeader />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {favoriteProducts.map((product, index) => (
            <PromotionCard
              key={index}
              product={product}
            />
          ))}
        </div>
      </Container>

      <Promotions
        title="Always useful"
        showHeader={false}
        rows={1}
      />

      <Features />
    </section>
  );
}

export default FavoritesPage;