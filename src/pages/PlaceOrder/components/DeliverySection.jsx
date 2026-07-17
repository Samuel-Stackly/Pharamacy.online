import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function DeliverySection() {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-[#303030]">
                Delivery
            </h2>

            {/* Tabs */}
            <div className="mt-8 flex border-b border-[#E8ECEF]">
                <button className="min-w-[180px] border-b-2 border-[#31D4B5] bg-[#31D4B5] px-8 py-5 text-sm font-semibold uppercase text-white">
                    Delivery
                </button>

                <button className="min-w-[180px] bg-[#F5F8F9] px-8 py-5 text-sm font-semibold uppercase text-[#303030] transition hover:bg-[#EEF4F5]">
                    Pickup
                </button>
            </div>

            {/* Address */}
            <div className="mt-8">
                <p className="mb-6 text-lg text-[#555]">
                    Select an address from the list or add a new one:
                </p>

                <label className="mb-8 flex items-center gap-3">
                    <input
                        type="radio"
                        defaultChecked
                        className="accent-[#31D4B5]"
                    />

                    <span className="text-sm text-[#666]">
                        Add new address
                    </span>
                </label>

                <div className="grid gap-5 lg:grid-cols-[2fr_0.6fr_0.6fr_0.7fr_0.7fr]">
                    <div className="relative">
                        <MapPin
                            size={18}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9AA4AE]"
                        />

                        <input
                            type="text"
                            placeholder="Delivery address"
                            className="w-full rounded-full border border-[#DDE5EA] py-4 pl-14 pr-6 outline-none transition focus:border-[#31D4B5]"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Entrance"
                        className="rounded-full border border-[#DDE5EA] px-5 py-4 outline-none transition focus:border-[#31D4B5]"
                    />

                    <input
                        type="text"
                        placeholder="Floor"
                        className="rounded-full border border-[#DDE5EA] px-5 py-4 outline-none transition focus:border-[#31D4B5]"
                    />

                    <input
                        type="text"
                        placeholder="Apartment"
                        className="rounded-full border border-[#DDE5EA] px-5 py-4 outline-none transition focus:border-[#31D4B5]"
                    />

                    <input
                        type="text"
                        placeholder="Intercom code"
                        className="rounded-full border border-[#DDE5EA] px-5 py-4 outline-none transition focus:border-[#31D4B5]"
                    />
                </div>

                <Link
                    to="/delivery"
                    className="mt-6 inline-block text-sm text-[#31D4B5] underline"
                >
                    Additional information
                </Link>
            </div>
        </div>
    );
}

export default DeliverySection;