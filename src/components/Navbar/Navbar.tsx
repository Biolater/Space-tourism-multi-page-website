import { useState, useRef } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../icons/Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useClickAway } from "react-use";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickAway(menuRef, () => setIsMenuOpen(false));
  return (
    <header className="min-h-[5.5rem] flex">
      <div className="px-6 flex items-center w-full justify-between">
        <a className="" href="/">
          <Logo />
        </a>
        <button onClick={handleClick}>
          <span className="sr-only">
            {isMenuOpen ? "Close navigation" : "Open navigation"}
          </span>
          <HamburgerIcon />
        </button>
      </div>
      {/* Hamburger Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <HamburgerMenu handleClose={handleClick} ref={menuRef} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
