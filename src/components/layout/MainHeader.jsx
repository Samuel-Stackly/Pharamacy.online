import {
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Menu,
} from "lucide-react";

import { useState } from "react";
import Container from "../common/Container";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

function MainHeader({ isMenuOpen, setIsMenuOpen }) {

  return (
    <div className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Left */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <img src={logo} alt="Logo" className="h-12 w-auto" />

          {/* Desktop Info */}
          <div className="hidden items-center gap-10 lg:flex">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-[#18C5A9]" />
              <div>
                <p className="text-sm font-semibold">INFO@RESTOLL.RU</p>
                <p className="text-xs text-gray-500">Write to us</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} className="text-[#18C5A9]" />
              <div>
                <p className="font-semibold">8-800-777-22-33</p>
                <p className="text-xs text-gray-500">Around the clock</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} className="text-[#18C5A9]" />
              <div>
                <p className="font-semibold">8 (495) 223-34-03</p>
                <p className="text-xs text-gray-500">Online pharmacy</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <Search size={18} />
            </button>

            <Link
              to="/contacts"
              className="hidden rounded-full bg-[#18C5A9] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#13b397] lg:block"
            >
              REQUEST A CALL
            </Link>

            <Link
              to="/cart"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100"
            >
              <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainHeader;