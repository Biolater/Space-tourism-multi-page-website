import { useState, useRef } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../icons/Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useClickAway } from "react-use";
import { AnimatePresence } from "framer-motion";
import { MENUITEMS } from "./HamburgerMenu";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickAway(menuRef, () => setIsMenuOpen(false));
  return (
    <header className="min-h-[5.5rem] flex fixed top-0 w-full z-10 bg-blue-900/75 backdrop-blur-md">
      <div className="px-6 md:pe-0 flex items-center w-full justify-between">
        <a className="me-8" href="/">
          <Logo />
        </a>
        <button className="md:hidden" onClick={handleClick}>
          <span className="sr-only">
            {isMenuOpen ? "Close navigation" : "Open navigation"}
          </span>
          <HamburgerIcon />
        </button>
        <nav className="hidden md:flex gap-x-600 md:bg-white/5 h-full flex-grow items-center justify-end px-600">
          <ul className="flex gap-x-600">
            {MENUITEMS.map((item, idx) => (
              <NavItem  key={idx} isActive={item === "home"} href={`/${item}`}>
                {item}
              </NavItem>
            ))}
          </ul>
        </nav>
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
