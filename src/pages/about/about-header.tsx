import { motion } from "framer-motion";
import CV from "../../assets/about/PONTINO-JULIETA-CV.pdf";
import me from "/src/assets/about/me.png";
import useImagePreloader from "../../hooks/use-image-preloader";
import { Link } from "react-router-dom";

const preloadSrcList = [me];

export function AboutHeader() {
  useImagePreloader(preloadSrcList);

  return (
    <header className="relative z-10 flex flex-wrap flex-col items-center justify-between max-w-[1900px] mx-auto overflow-x-hidden lg:flex-row ">
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="w-full sm:w-[55%] lg:w-3/6 h-full self-start">
        <img
          className="max-w-full h-auto border-none block"
          src={me}
          alt="Portrait of myself"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className="md:w-4/5 mt-28 md:ml-[5%] lg:mt-0 lg:w-2/5">
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
          <Link to="/contact" className="underline hover:text-primary-200">
            get in touch here!
          </Link>
        </p>
        <div className="flex gap-1 items-center px-5 sm:ml-[10%] lg:relative lg:-left-[13px] lg:ml-0 lg:p-0">
          <p className="text-2xl max-w-[676px] mt-0 md:text-sm md:mt-2">
            Or check out my CV
          </p>
          <form method="get" action={CV} target="_blank" rel="noreferrer">
            <button className="text-primary-300 text-2xl underline hover:text-primary-200 md:text-sm ">
              here
            </button>
          </form>
        </div>
      </motion.div>
    </header>
  );
}
