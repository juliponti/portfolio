import { motion } from "framer-motion";
import { navlinksData } from "../navlinks-data";

export default function HamburgerNavigation() {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="flex justify-center h-full mt-28">
      <motion.ul variants={variants} className="relative flex flex-col gap-5">
        {navlinksData.map(({ name, href }) => (
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={name}
            className="uppercase tracking-[0.110rem] text-2xl  md:ml-7  hover:text-primary-200">
            <a href={href}>{name}</a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
