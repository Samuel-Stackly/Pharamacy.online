import { ChevronDown } from "lucide-react";

const rows = Array.from({ length: 18 }, (_, i) => ({
  count: Math.floor(Math.random() * 10) + 1,
  name: [
    "Audrey Mckinney",
    "Savannah Howard",
    "Morris Cooper",
    "Victoria Lane",
    "Stella Warren",
    "Max Alexander",
    "Guy Richards",
    "Kyle Murphy",
    "Morris Bell",
    "Jacob Black",
  ][i % 10],
  address: `${1200 + i * 42} Ranchview Dr undefined San Jose`,
  phone: `(209) 555-${1000 + i}`,
}));

function ArticleTable() {
  return (
    <div className="mt-12 overflow-hidden rounded-xl border border-[#E7EEF4]">
      <table className="w-full border-collapse">
        <thead className="bg-[#31D4B5] text-left text-sm text-white">
          <tr>
            <th className="w-16 p-4"></th>
            <th className="p-4">Count</th>
            <th className="p-4">Name</th>
            <th className="p-4">Address</th>
            <th className="p-4">Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-[#EEF2F6] even:bg-[#F9FBFC]"
            >
              <td className="p-4">
                <ChevronDown
                  size={16}
                  className="text-[#666]"
                />
              </td>

              <td className="p-4">{row.count}</td>

              <td className="p-4">{row.name}</td>

              <td className="p-4">{row.address}</td>

              <td className="p-4">{row.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArticleTable;