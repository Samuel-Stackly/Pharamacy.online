import { NavLink } from "react-router-dom";
import Container from "../common/Container";

// Icons
import PillsIcon from "../../assets/icons/pills 1.svg";
import VitaminsIcon from "../../assets/icons/vitamins 1.svg";
import BeautyIcon from "../../assets/icons/Group.svg";
import HygieneIcon from "../../assets/icons/washing-hands 1.svg";
import LensesIcon from "../../assets/icons/eye 1.svg";
import MotherIcon from "../../assets/icons/baby-boy 1.svg";
import MedicalStoreIcon from "../../assets/icons/first-aid-kit 1.svg";
import PetIcon from "../../assets/icons/dog 1.svg";
import EmergencyIcon from "../../assets/icons/smartwatch 1.svg";

const categories = [
  {
    name: "Medicines",
    path: "/",
    icon: PillsIcon,
  },
  {
    name: "Vitamins & Dietary Supplements",
    path: "/alphabetical-search",
    icon: VitaminsIcon,
  },
  {
    name: "Beauty",
    path: "/search-by-alphabet/A",
    icon: BeautyIcon,
  },
  {
    name: "Hygiene",
    path: "/product/1",
    icon: HygieneIcon,
  },
  {
    name: "Lenses",
    path: "/health",
    icon: LensesIcon,
  },
  {
    name: "Mother and Child",
    path: "/blog/1",
    icon: MotherIcon,
  },
  {
    name: "Medical Store",
    path: "/reviews",
    icon: MedicalStoreIcon,
  },
  {
    name: "Pet Supplies",
    path: "/favorites",
    icon: PetIcon,
  },
  {
    name: "Medical Emergency",
    path: "/cart",
    icon: EmergencyIcon,
  },
];

function CategoryNav() {
  return (
    <div className="bg-gradient-to-r from-[#15308F] to-[#22D0B5]">
      <Container>
        <div className="flex h-16 items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-wide transition ${
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-gray-200"
                }`
              }
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-6 w-6 object-contain"
              />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategoryNav;