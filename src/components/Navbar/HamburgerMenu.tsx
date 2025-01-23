import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef, useEffect } from "react";
import CloseIcon from "../icons/CloseIcon";
import HamburgerMenuItem from "./HamburgerMenuItem";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

// Extend props to include handleClose
type HamburgerMenuProps = HTMLMotionProps<"div"> & {
  handleClose: () => void;
};

export const MENUITEMS = [
  { name: "home", path: "/" },
  { name: "destination", path: "/destination" },
  { name: "crew", path: "/crew" },
  { name: "technology", path: "/technology" },
];

// Use forwardRef to pass down the ref
const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>(
  ({ handleClose, ...props }, ref) => {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleClose]);
    const { pathname } = useLocation();
    return createPortal(
      <motion.div
        className="h-screen md:hidden flex flex-col gap-x-600 ps-400 fixed top-0 right-0 bg-blue-900/15 backdrop-blur-md w-[15.875rem] z-20"
        ref={ref}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 40,
          duration: 0.5,
        }}
        {...props}
      >
        <header className="py-400 pe-300 flex justify-end">
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </header>
        <ul className="flex flex-col space-y-400">
          {MENUITEMS.map((item, idx) => (
            <HamburgerMenuItem
              href={item.path}
              isActive={pathname === item.path}
              key={item.name}
            >
              <span className="mr-150 tracking-[0.16875rem] font-bold">
                0{idx}
              </span>
              {item.name}
            </HamburgerMenuItem>
          ))}
        </ul>
      </motion.div>,
      document.body
    );
  }
);

export default HamburgerMenu;

