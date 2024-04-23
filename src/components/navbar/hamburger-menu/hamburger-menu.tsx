import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../../hooks/use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { useRef } from "react";
import HamburgerNavigation from "./hamburger-navigation";

export default function HamburgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 500px 40px)`,
      transition: {
        type: "tween",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 600px 40px)",
      transition: {
        delay: 0.7,
        type: "tween",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={
        isOpen
          ? "absolute top-0 right-0 w-full h-full z-20 "
          : "absolute top-0 right-0 w-full h-full z-0 transition-[z-index] delay-[1s]"
      }
    >
      <motion.div
        className="absolute top-0 right-0 h-full w-full bg-primary-100"
        variants={sidebar}
      />
      <HamburgerNavigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
