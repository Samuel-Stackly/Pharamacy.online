import { ChevronRight } from "lucide-react";



import {
  deliveryTables,
  pickupLocations,
} from "./deliveryData";
import Container from "../../../components/common/Container";

function DeliverySection() {
  return (
    <section className="py-16">
      <Container className="max-w-[1400px]">
        <h2 className="text-5xl font-bold text-[#303030]">
          Delivery and pickup in Moscow and the region
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {deliveryTables.map((table) => (
            <div key={table.title}>
              <h3 className="mb-5 text-lg text-[#666]">
                {table.title}
              </h3>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F7FBFB] text-left text-sm text-[#888]">
                    <th className="p-4">Delivery of orders</th>
                    <th className="p-4">up to 500 rub.</th>
                    <th className="p-4">from 500 rub.</th>
                  </tr>
                </thead>

                <tbody>
                  {table.rows.map((row) => (
                    <tr
                      key={row.place}
                      className="border-b"
                    >
                      <td className="p-4">{row.place}</td>
                      <td className="p-4">{row.upto}</td>
                      <td className="p-4">{row.from}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-5xl font-bold text-[#303030]">
          Pickup in Moscow and the region
        </h2>

        <p className="mt-2 text-[#666]">
          Delivery of orders within the Moscow Ring Road
        </p>

        <table className="mt-8 w-full border-collapse">
          <thead>
            <tr className="bg-[#F7FBFB] text-left text-sm text-[#888]">
              <th className="p-4">List of pharmacies</th>
              <th className="p-4">Issue of goods</th>
              <th className="p-4">Cost</th>
            </tr>
          </thead>

          <tbody>
            {pickupLocations.map((item, index) => (
              <tr
                key={index}
                className="border-b"
              >
                <td className="p-4">{item}</td>

                <td className="p-4 text-[#777]">
                  within an hour
                </td>

                <td className="p-4 text-[#777]">
                  Free
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase text-[#31D4B5] transition hover:text-[#27B99E]">
          <ChevronRight size={16} />
          All Delivery Terms
        </button>
      </Container>
    </section>
  );
}

export default DeliverySection;