import installment from "../../../assets/images/payment/installment.svg";

function InstallmentOptions() {
  return (
    <section className="mt-14">
      <h2 className="text-[34px] font-bold text-[#303030]">
        Installment options
      </h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Left */}
        <div className="space-y-8 text-[15px] leading-8 text-[#777777]">
          <p>
            Diverse and rich experience and the existing structure of the
            organization require the definition and clarification of the
            development model.
          </p>

          <p>
            The task of the organization, in particular the new model of
            organizational activity, requires definition.
          </p>

          <p>
            Ideological considerations of a higher order, as well as the
            further development of various forms of activity require the
            identification and clarification of further directions of
            development.
          </p>
        </div>

        {/* Right */}
        <div className="overflow-hidden rounded-[28px] bg-[#F7F9FB]">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="space-y-8 text-[15px] leading-8 text-[#777777]">
                <p>
                  Diverse and rich experience and the existing structure of the
                  organization require the definition and clarification of the
                  model.
                </p>

                <p>
                  The task of the organization, in particular the new model of
                  organizational activity, requires defining and clarifying the
                  directions of progressive development.
                </p>

                <p>
                  Ideological considerations of the highest order.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 xl:flex-row">
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="h-12 flex-1 rounded-full border border-[#DDE5EA] px-5 outline-none transition focus:border-[#31D4B5]"
                />

                <button className="h-12 rounded-full bg-[#31D4B5] px-8 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#28BEA4]">
                  Registration
                </button>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#999999]">
                By clicking on the button, you agree to the processing of
                personal data.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={installment}
                alt="Installment"
                className="max-h-[260px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallmentOptions;