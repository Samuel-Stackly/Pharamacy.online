import { pharmacies } from "./pickupData";


function PharmacyTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-[#EDF2F4]">
      <table className="w-full">
        <thead className="bg-[#F8FCFC]">
          <tr className="text-left text-sm font-semibold text-[#777]">
            <th className="p-5">List</th>
            <th className="p-5">Address</th>
            <th className="p-5">Cards</th>
            <th className="p-5">Opening Hours</th>
            <th className="p-5">Phone</th>
            <th className="p-5"></th>
          </tr>
        </thead>

        <tbody>
          {pharmacies.map((item, index) => (
            <tr
              key={index}
              className="border-t"
            >
              <td className="p-5 text-[#666]">
                {item.name}
              </td>

              <td className="max-w-[320px] p-5 text-[#666]">
                {item.address}
              </td>

              <td className="p-5 font-semibold text-[#1A73E8]">
                VISA
              </td>

              <td className="p-5 text-sm text-[#666]">
                {item.hours}
              </td>

              <td className="p-5 text-sm text-[#666]">
                {item.phone}
              </td>

              <td className="p-5">
                <button className="rounded-full bg-[#31D4B5] px-8 py-3 text-xs font-semibold uppercase text-white transition hover:bg-[#28BEA4]">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PharmacyTable;