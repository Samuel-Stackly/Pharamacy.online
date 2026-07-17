import { infoTabs } from "./productInfoData";


function InfoTabs() {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {infoTabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-full px-4 py-2 text-sm transition ${
            index === 0
              ? "bg-[#31D4B5] text-white"
              : "bg-[#F4F6F8] text-[#666] hover:bg-[#31D4B5] hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default InfoTabs;