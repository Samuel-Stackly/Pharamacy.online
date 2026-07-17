const menu = [
  "Personal details",
  "Your orders",
  "Feedback",
];

function AccountSidebar() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#E7EDF3]">
      {menu.map((item, index) => (
        <button
          key={item}
          className={`flex h-16 w-full items-center px-6 text-left text-sm font-semibold uppercase transition ${
            index === 1
              ? "bg-[#F6F8FA]"
              : "bg-white hover:bg-[#F6F8FA]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default AccountSidebar;