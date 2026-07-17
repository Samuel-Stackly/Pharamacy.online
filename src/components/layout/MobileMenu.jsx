import {
  Heart,
  Mail,
  MapPin,
  Phone,
  User,
  X,
} from "lucide-react";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  if (!isMenuOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        onClick={() => setIsMenuOpen(false)}
      />

      <div className="fixed left-0 top-0 z-50 h-screen w-80 bg-white shadow-xl lg:hidden">
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-semibold">
            Menu
          </h2>

          <button onClick={() => setIsMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="space-y-6 p-5">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Medicines</li>
              <li>Vitamins</li>
              <li>Hygiene</li>
              <li>Lenses</li>
              <li>Mother & Child</li>
              <li>Medical Products</li>
              <li>Pet Supplies</li>
              <li>Medical Equipment</li>
            </ul>
          </div>

          <hr />

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              Moscow and region
            </div>

            <div className="flex items-center gap-3">
              <Heart size={18} />
              Favorites
            </div>

            <div className="flex items-center gap-3">
              <User size={18} />
              Personal Account
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              info@restoll.ru
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              8-800-777-22-33
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              8 (495) 223-34-03
            </div>
          </div>

          <button className="w-full rounded-full bg-[#28D4B8] py-3 font-semibold text-white">
            Request a Call
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;