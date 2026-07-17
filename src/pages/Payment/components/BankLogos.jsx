import { partners } from "../../Home/sections/Partners/partnersData";

function BankLogos() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-x-8 gap-y-6 md:grid-cols-4 lg:grid-cols-5">
      {partners.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
        >
          <img
            src={logo}
            alt="Bank"
            className="h-8 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default BankLogos;