function ProductTabs() {
  const tabs = [
    "Basic",
    "Instructions",
    "Options",
    "Reviews",
    "Delivery",
    "Pickup",
  ];

  return (
    <div className="mt-8 flex overflow-x-auto border-b border-[#E8ECEF]">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`min-w-[160px] border-b-2 py-5 text-sm font-semibold uppercase transition ${
            index === 0
              ? "border-[#F6C643] text-[#303030]"
              : "border-transparent text-[#777] hover:text-[#31D4B5]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default ProductTabs;