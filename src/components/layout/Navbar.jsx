import { useState } from "react";

import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import CategoryNav from "./CategoryNav";
import TagsBar from "./TagsBar";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <TopBar />

      <MainHeader
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <CategoryNav />
      <TagsBar />

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}

export default Navbar;