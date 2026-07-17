import { deliveryRows } from "../deliveryData";

import DeliveryFeatures from "./DeliveryFeatures";

function DeliveryPricing() {
  return (
    <section>
      <h2 className="text-5xl font-bold text-[#24325B]">
        Delivery
      </h2>

      <h3 className="mt-6 text-3xl font-semibold text-[#303030]">
        Delivery and pickup in Moscow and the region
      </h3>

      <p className="mt-4 text-[#666]">
        Delivery of orders within the Moscow Ring Road
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-[#EDF2F4]">
        <table className="w-full">
          <thead className="bg-[#F8FCFC]">
            <tr className="text-left text-sm text-[#777]">
              <th className="p-5">Delivery method</th>
              <th className="p-5">Execution time</th>
              <th className="p-5">Cost</th>
            </tr>
          </thead>

          <tbody>
            {deliveryRows.map((row, index) => (
              <tr
                key={index}
                className="border-t"
              >
                <td className="p-5">{row.method}</td>

                <td className="p-5">{row.time}</td>

                <td className="p-5">{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-10 leading-8 text-[#666]">
        On the other hand, the beginning of daily work on the
        formation of a position ensures a wide circle
        (specialists) participation in the formation of
        directions for progressive development. Everyday
        practice shows that the scope and location of personnel
        training allows us to carry out important tasks in
        developing a development model.
      </p>

      <DeliveryFeatures />

      <p className="mt-10 leading-8 text-[#666]">
        Everyday practice shows that the further development of
        various forms of activity plays an important role in
        the formation of significant financial and
        administrative conditions.
      </p>

      <p className="mt-6 leading-8 text-[#666]">
        It should not be forgotten, however, that the
        implementation of new proposals and diverse practical
        experience continue to shape progressive development.
      </p>
    </section>
  );
}

export default DeliveryPricing;