function ConfirmOrder() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-[#303030]">
        Confirm your order
      </h2>

      <div className="mt-8 space-y-5">
        <div className="flex justify-between">
          <span className="text-[#777]">
            Cost of goods without discount
          </span>

          <span className="font-semibold">
            587 rub.
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#777]">
            Discount
          </span>

          <span className="font-semibold">
            -32 rub.
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#777]">
            Delivery
          </span>

          <span className="font-semibold">
            0 rub.
          </span>
        </div>

        <div className="flex justify-between border-t pt-5 text-xl font-bold">
          <span>Total</span>

          <span>555 rub.</span>
        </div>
      </div>

      <button className="mt-10 rounded-full bg-[#31D4B5] px-14 py-4 text-sm font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
        Confirm Order
      </button>
    </div>
  );
}

export default ConfirmOrder;