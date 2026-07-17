import security from "../../../assets/images/payment/security.svg";

import BankLogos from "./BankLogos";

function PaymentByCard() {
  return (
    <section className="mt-20">
      <h2 className="text-[34px] font-bold text-[#24325B]">
        Payment by bank card
      </h2>

      <div className="mt-10 grid gap-14 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h3 className="text-[22px] font-semibold text-[#303030]">
            What payment systems are accepted?
          </h3>

          <p className="mt-6 text-[15px] leading-8 text-[#777777]">
            Cash payment is possible for courier delivery, as well as at the
            pick-up point. Payment for the order and delivery is made directly
            to the courier or cashier at the pharmacy upon receipt of the
            order, along with the order you receive all the necessary
            documents and a cash receipt.
          </p>

          <BankLogos />

          <p className="mt-8 text-[15px] leading-8 text-[#777777]">
            Copies of certificates and licenses are available upon prior
            request. To pay for your order in cash upon receipt, when placing
            your order, select the payment method "Cash" and click
            "Place an order".
          </p>
        </div>

        {/* Right */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">
          <div>
            <h3 className="text-[22px] font-semibold text-[#303030]">
              How is the security and protection of personal data ensured
            </h3>

            <p className="mt-6 text-[15px] leading-8 text-[#777777]">
              Diverse and rich experience and the existing structure of the
              organization require the definition and clarification of the
              development model.
            </p>

            <p className="mt-8 text-[15px] leading-8 text-[#777777]">
              The task of the organization, in particular a new model of
              organizational activity, requires defining and clarifying the
              directions of progressive development.
            </p>

            <p className="mt-8 text-[15px] leading-8 text-[#777777]">
              Ideological considerations of a higher order, as well as the
              further development of various forms of activity, require
              clarification.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={security}
              alt="Security"
              className="max-h-[260px] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="mt-16">
        <h2 className="text-[34px] font-bold text-[#24325B]">
          Cashless payments for legal entities or individual entrepreneurs
        </h2>

        <p className="mt-8 text-[15px] leading-8 text-[#777777]">
          Diverse and rich experience and the existing structure of the
          organization require the definition and clarification of the
          development model. The task of the organization, in particular the
          new model of organizational activity, requires defining and
          clarifying the directions of progressive development.
          Ideological considerations of a higher order, as well as the
          further development of various forms of activity, require the
          identification and clarification of further directions of
          development.
        </p>

        <p className="mt-10 text-[15px] leading-8 text-[#777777]">
          Diverse and rich experience, constant information and propaganda
          support of our activities allows us to appreciate the importance of
          the development model. Comrades! the beginning of the daily work of
          position formation represents an interesting experiment in testing
          systems of mass participation. The task of the organization, in
          particular the beginning of daily work on the formation of a
          position, contributes to the preparation and implementation of a
          personnel training system that meets urgent needs.
        </p>
      </div>

      {/* Contact Box */}

      <div className="mt-16 rounded-[30px] bg-[#F7F9FB] px-10 py-12">
        <p className="mx-auto max-w-4xl text-center text-[18px] leading-10 text-[#555555]">
          If you have any questions, call our toll-free number{" "}
          <span className="font-bold">8-800-777-22-33</span>, write to{" "}
          <span className="font-bold">info@restoll.ru</span>. We are available{" "}
          <span className="font-bold">
            on weekdays from 9:00 to 18:00
          </span>
          , and{" "}
          <span className="font-bold">
            on weekends from 12:00 to 16:00
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export default PaymentByCard;