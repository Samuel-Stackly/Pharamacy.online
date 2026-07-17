import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";

import Promotions from "../Home/sections/Promotions/Promotions";
import Features from "../Home/sections/Features/Features";

import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

import { cartItems } from "./cartData";

function CartPage() {
  return (
    <section className="py-8">
      <Container className="max-w-[1400px]">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Cart" },
          ]}
        />

        <div className="mt-4 mb-10 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-[#303030]">
            Cart
          </h1>

          <button className="text-sm font-semibold uppercase tracking-wide text-[#8C8C8C] transition hover:text-red-500">
            Empty Trash
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Cart Items */}
          <div className="space-y-5">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* Summary */}
          <CartSummary />
        </div>
      </Container>

      {/* Recommended Products */}
      <Promotions
        title="Always useful"
        rows={1}
      />

      {/* Features */}
      <Features />
    </section>
  );
}

export default CartPage;