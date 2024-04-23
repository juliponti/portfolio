import { motion } from "framer-motion";
import CV from "../../assets/about/PONTINO-JULIETA-CV.pdf";

export function AboutHeader() {
  return (
    <header className="relative z-10 flex flex-wrap flex-col items-center justify-between max-w-[1900px] mx-auto overflow-x-hidden lg:flex-row ">
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.3 }}
        className="w-full sm:w-[55%] lg:w-3/6 h-full self-start"
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
        className="md:w-4/5 mt-28 md:ml-[5%] lg:mt-0 lg:w-2/5"
      >
        <h1 className="text-4xl pb-10 md:pb-0 ml-5 lg:ml-0 lg:text-5xl xl:text-6xl lg:relative lg:-left-[63px] xl:-left-[100px] mb-4 normal-case">
          hi, i'm julieta !
        </h1>
        <p className="text-2xl px-5 sm:ml-[10%] mb-2 md:text-sm lg:mb-0 lg:ml-0 lg:relative lg:-left-[32px] max-w-[676px]">
          With a deep-rooted passion for web development I thrive in the
          ever-evolving world of technology, staying up to date with the latest
          trends and industry best practices. My goal is to create visually
          stunning and user-friendly interfaces that leave a lasting impact on
          users
        </p>
        <p className="text-2xl px-5 sm:ml-[10%] mb-2 md:text-sm lg:relative lg:mb-0 lg:ml-0 lg:-left-[32px] max-w-[676px] mt-2">
          I'm looking foward for my next challenge, if you're interested in
          working together{" "}
          <a href="/contact" className="underline hover:text-primary-200">
            get in touch here!
          </a>
        </p>
        <p className="text-2xl px-5 sm:ml-[10%] mb-2 md:text-sm lg:mb-0 lg:ml-0 lg:relative lg:-left-[32px] max-w-[676px] flex flex-col md:flex-row gap-1 mt-2">
          Or check out my CV
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
