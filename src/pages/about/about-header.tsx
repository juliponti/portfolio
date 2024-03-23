import { motion } from "framer-motion";
import CV from "../../assets/about/PONTINO-JULIETA-CV.pdf";

export function AboutHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between max-w-[1900px] mx-auto overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className="w-3/6 h-full"
      >
        <img
          className="max-w-full h-auto border-none block"
          src="/src/assets/about/me.png"
          alt="Portrait of myself"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className="w-2/5"
      >
        <h1 className="text-6xl relative -left-[100px] mb-4 normal-case">
          hi, i'm julieta !
        </h1>
        <p className="text-sm relative -left-[32px] max-w-[676px]">
          With a deep-rooted passion for web development I thrive in the
          ever-evolving world of technology, staying up to date with the latest
          trends and industry best practices. My goal is to create visually
          stunning and user-friendly interfaces that leave a lasting impact on
          users
        </p>
        <p className="text-sm relative -left-[32px] max-w-[676px] mt-2">
          I'm looking foward for my next challenge, if you're interested in
          working together{" "}
          <a href="/contact" className="underline hover:text-primary-200">
            get in touch here!
          </a>
        </p>
        <p className="text-sm relative -left-[32px] max-w-[676px] flex gap-1 mt-2">
          From Argentina, Buenos Aires
          <img src="/src/assets/about/argentina-flag.png" className="ml-1" />
          <p>Check out my CV</p>
          <form method="get" action={CV} target="_blank" rel="noreferrer">
            <button className="text-primary-300 hover:text-primary-200">
              here
            </button>
          </form>
        </p>
      </motion.div>
    </header>
  );
}
