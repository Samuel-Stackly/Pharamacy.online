import { Heart, MapPin, Menu, User } from "lucide-react";

import Container from "../common/Container";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-white lg:block">
      <Container>
        <div className="flex h-10 items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 hover:text-[#1EC6A8] transition-colors">
              <MapPin size={16} />
              <span>Moscow and region</span>
            </button>

            <button className="flex items-center gap-2 hover:text-[#1EC6A8] transition-colors">
              <Menu size={16} />
              <span>Service pages</span>
            </button>
          </div>

          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 hover:text-[#1EC6A8] transition-colors">
              <Link
                to="/favorites"
                className="transition hover:text-[#31D4B5]"
              >
                <Heart size={16} />
              </Link>

              <span>Favorites</span>
            </button>

            <Link
              to="/profile"
              className="flex items-center gap-2 transition-colors hover:text-[#1EC6A8]"
            >
              <User size={16} />
              <span>Personal account</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;