import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between max-w-[1900px] mx-auto overflow-x-hidden sm:flex-col sm:items-start md:flex-row md:items-center ">
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className="w-4/5 sm:w-4/5 md:w-3/6 h-full"
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
        className="w-4/5 mt-20 mb-7 mx-auto md:m-0 md:w-2/5 lg:m-0"
      >
        <h1 className="static text-5xl md:text-4xl md:relative lg:relative lg:text-6xl  -left-[33%] mb-4 normal-case">
          Julieta Pontino
        </h1>
        <h2 className="uppercase font-sans font-light text-base leading-6 tracking-widest">
          Front-end developer
        </h2>
      </motion.div>
    </header>
  );
}
