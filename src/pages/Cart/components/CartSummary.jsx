import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CartSummary() {
    return (
        <div className="w-full xl:sticky xl:top-6 rounded-2xl border border-[#E8ECEF] bg-white">
            {/* Order Summary */}
            <div className="p-8">
                <h2 className="text-4xl font-bold text-[#303030]">
                    Your order
                </h2>

                <div className="mt-10 space-y-6">
                    <div className="flex items-center justify-between text-lg">
                        <span className="text-[#666]">
                            Discount
                        </span>

                        <span className="text-[#555]">
                            -32 RUB
                        </span>
                    </div>

                    <div className="flex items-center justify-between border-t pt-6">
                        <span className="text-xl font-medium text-[#303030]">
                            Total without delivery
                        </span>

                        <span className="text-2xl font-bold text-[#4A5568]">
                            548 RUB
                        </span>
                    </div>
                </div>

                <Link
                    to="/checkout"
                    className="mt-10 flex w-full items-center justify-center rounded-full bg-[#31D4B5] py-5 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]"
                >
                    Place an Order
                </Link>
            </div>

            {/* Promo Code */}
            <div className="border-t border-[#E8ECEF] p-8">
                <h3 className="text-3xl font-bold text-[#303030]">
                    Promo code
                </h3>

                <div className="relative mt-8">
                    <input
                        type="text"
                        placeholder="Enter promo code"
                        className="w-full rounded-full border border-[#DDE5EA] py-4 pl-6 pr-16 outline-none transition focus:border-[#31D4B5]"
                    />

                    <button className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#31D4B5] text-white transition hover:bg-[#28BEA4]">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartSummary;