import { useState, useRef } from "react";
import HamburgerIcon from "../icons/HamburgerIcon";
import Logo from "../icons/Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useClickAway } from "react-use";
import { AnimatePresence } from "framer-motion";
import { MENUITEMS } from "./HamburgerMenu";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen((prev) => !prev);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  useClickAway(menuRef, () => setIsMenuOpen(false));

  return (
    <div className="lg:pt-400">
      <header className="min-h-[5.5rem] lg:container max-w-[1440px] lg:left-0 lg:right-0 mx-auto flex z-10">
        <div className="px-6 md:pe-0 lg:ps-500 flex items-center w-full justify-between">
          <div className="me-8 after:hidden lg:after:block lg:m-0 navbar-logo">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="line hidden lg:block flex-grow ms-8 -me-400 z-10 h-px bg-white opacity-20"></div>
          <button className="md:hidden" onClick={handleClick}>
            <span className="sr-only">
              {isMenuOpen ? "Close navigation" : "Open navigation"}
            </span>
            <HamburgerIcon />
          </button>
          <nav className="hidden md:flex gap-x-600 backdrop-blur-lg md:bg-white/5 h-full flex-grow lg:flex-grow-0 items-center justify-end px-600 lg:px-800 lg:basis-2/4">
            <ul className="flex gap-x-600 h-full items-center">
              {MENUITEMS.map((item, idx) => (
                <NavItem
                  key={idx}
                  isActive={pathname === item.path}
                  href={item.path}
                >
                  {" "}
                  <span className="mr-150 tracking-[0.16875rem] font-bold">
                    0{idx}
                  </span>
                  {item.name}
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
    </div>
  );
};

export default Navbar;
