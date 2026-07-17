import {
  Baby,
  Bone,
  HeartPulse,
  Pill,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Eye,
  Activity,
} from "lucide-react";

const categories = [
  { icon: HeartPulse, name: "COVID-19", count: 14 },
  { icon: ShieldPlus, name: "Allergies", count: 24 },
  { icon: Pill, name: "Medical cosmetics", count: 24 },
  { icon: Activity, name: "Intestines", count: 17 },
  { icon: Stethoscope, name: "Thrush", count: 18 },
  { icon: Syringe, name: "Overweight", count: 14 },
  { icon: Bone, name: "Joints", count: 123 },
  { icon: Eye, name: "Vision", count: 18 },
  { icon: Baby, name: "Gout", count: 17 },
];

function BlogCategories() {
  return (
    <section className="mt-10 overflow-x-auto">
      <div className="flex min-w-max items-center gap-8 border-b border-[#EEF2F6] pb-4">
        {categories.map(({ icon: Icon, name, count }) => (
          <button
            key={name}
            className="flex items-center gap-2 whitespace-nowrap text-sm text-[#666666] transition hover:text-[#31D4B5]"
          >
            <Icon
              size={16}
              className="text-[#31D4B5]"
            />

            <span>{name}</span>

            <span className="text-[#B5B5B5]">
              {count}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default BlogCategories;