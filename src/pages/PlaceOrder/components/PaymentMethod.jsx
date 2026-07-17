import { Link } from "react-router-dom";
import vm from "../../../assets/images/home/vm.svg"
import { Info } from "lucide-react";

function PaymentMethod() {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#303030]">
                Payment method
            </h2>

            <div className="mt-8 space-y-6">
                <label className="flex cursor-pointer items-center gap-4">
                    <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="accent-[#31D4B5]"
                    />

                    <span className="text-[#555]">
                        Cash or credit card upon receipt
                    </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4">
                    <input
                        type="radio"
                        name="payment"
                        className="accent-[#31D4B5]"
                    />

                    <span className="text-[#555]">
                        By card online
                    </span>

                    <img
                        src={vm}
                        alt="Payment methods"
                        className="h-6 object-contain"
                    />

                    <Link
                        to="/payment"
                        onClick={(e) => e.stopPropagation()}
                        className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-[#D9E3E8] text-[#31D4B5] transition hover:bg-[#31D4B5] hover:text-white"
                        title="Payment information"
                    >
                        <Info size={14} />
                    </Link>
                </label>
            </div>
        </div>
    );
}

export default PaymentMethod;