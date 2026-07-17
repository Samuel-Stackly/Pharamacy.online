import deliveryBoy from "../../../assets/images/delivery/delivery-boy.svg";

function DeliveryBanner() {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#F7FAFC]">
      <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-10">
        {/* Illustration */}

        <div className="flex shrink-0 justify-center">
          <img
            src={deliveryBoy}
            alt="Delivery"
            className="h-32 w-auto md:h-40"
          />
        </div>

        {/* Content */}

        <div>
          <h2 className="text-3xl font-bold text-[#303030]">
            Stay home! Order delivery!
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#6B7280]">
            To guarantee safety and ensure your peace of mind,
            we check the well-being of all couriers daily and
            provide them with new medical masks, gloves and
            antiseptics at the entrance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryBanner;