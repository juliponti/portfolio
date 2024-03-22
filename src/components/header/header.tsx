import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className="w-3/6 h-full"
      >
        <img
          className="max-w-full h-auto border-none block"
          src="/src/assets/home-header.jpg"
          alt="Delicate, green leaves from a plant against a pale green wall"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className="w-2/5"
      >
        <h1 className="text-6xl relative -left-[33%] mb-4 normal-case">
          Julieta Pontino
        </h1>
        <h2 className="uppercase font-light text-base leading-6 tracking-widest">
          Front-end developer
        </h2>
      </motion.div>
    </header>
  );
}
