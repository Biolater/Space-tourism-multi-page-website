import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import CloseIcon from "../icons/CloseIcon";
import HamburgerMenuItem from "./HamburgerMenuItem";
import { useLocation } from 'react-router-dom';


// Extend props to include handleClose
type HamburgerMenuProps = HTMLMotionProps<"div"> & {
  handleClose: () => void;
};

const MENUITEMS = ["home", "destination", "crew", "technology"];

// Use forwardRef to pass down the ref
const HamburgerMenu = forwardRef<HTMLDivElement, HamburgerMenuProps>(
  
  ({ handleClose, ...props }, ref) => {
    const { pathname } = useLocation();
    return (
      <motion.div
        className="h-screen flex flex-col gap-x-600 ps-400 fixed top-0 right-0 bg-blue-900/15 backdrop-blur-md w-[15.875rem] z-10"
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
            <HamburgerMenuItem href={`/${item === "home" ? "" : item}`} isActive={pathname === `/${item === "home" ? "" : item}`} key={item}>
              <span className="mr-150 tracking-[0.16875rem] font-bold">0{idx}</span>{item}
            </HamburgerMenuItem>
          ))}
        </ul>
      </motion.div>
    );
  }
);

export default HamburgerMenu;
