import {
  Building2,
  FileBadge,
} from "lucide-react";

import license from "../../../assets/images/home/licence.svg";

const stats = [
  {
    icon: FileBadge,
    title: "More than 5000 employees.",
    subtitle: "A truly large family!",
  },
  {
    icon: Building2,
    title: "More than 185 stores in 50 regions.",
    subtitle: "Central and North-West districts.",
  },
  {
    icon: FileBadge,
    title: "More than 5000 employees.",
    subtitle: "A truly large family!",
  },
  {
    icon: Building2,
    title: "More than 185 stores in 50 regions.",
    subtitle: "Central and North-West districts.",
  },
];

function TodayPharmacy() {
  return (
    <section className="mt-20">
      <h2 className="text-[34px] font-bold text-[#24325B]">
        Today "Pharmacy"
      </h2>

      <p className="mt-3 text-[15px] text-[#777777]">
        ...this is
      </p>

      {/* Stats */}

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ icon: Icon, title, subtitle }, index) => (
          <div
            key={index}
            className="flex items-center gap-5"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#31D4B5]">
              <Icon
                size={24}
                className="text-white"
              />
            </div>

            <div>
              <p className="text-sm font-semibold leading-6 text-[#303030]">
                {title}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#777777]">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* License */}

      <div className="mt-20">
        <h2 className="text-center text-[34px] font-bold text-[#24325B]">
          Our license
        </h2>

        <div className="mt-10 flex justify-center">
          <img
            src={license}
            alt="License"
            className="w-full max-w-[900px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default TodayPharmacy;