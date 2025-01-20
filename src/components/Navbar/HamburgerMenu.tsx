import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

// Use forwardRef to pass down the ref
const HamburgerMenu = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    return (
      <motion.div
        className="min-h-svh fixed top-0 right-0 bg-blue-900/15 backdrop-blur-md w-[15.875rem] z-10"
        ref={ref} // Attach the ref here
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 40,
          duration: 0.5,
        }}
        {...props} // Spread any additional props
      >
        HamburgerMenu
      </motion.div>
    );
  }
);

export default HamburgerMenu;
