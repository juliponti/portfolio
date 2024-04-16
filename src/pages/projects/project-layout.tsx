import { motion } from "framer-motion";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar";

interface ProjectLayoutProps {
  title: string;
  description: JSX.Element;
  technologies: string;
  pcScreenshot: {
    src: string;
    alt: string;
  };
  mobileScreenshot?: {
    src: string;
    alt: string;
  };
  codeLink?: string;
  liveLink: string;
}

export default function ProjectLayout({
  title,
  description,
  technologies,
  pcScreenshot,
  mobileScreenshot,
  liveLink,
  codeLink,
}: ProjectLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Navbar />
      <header className="relative z-10 flex flex-col items-center justify-between max-w-[1900px] mx-auto lg:flex-row lg:ml-auto lg:mr-0 xl:mx-auto">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.3 }}
          className="w-4/5 mt-20 mb-16 lg:my-0 lg:w-2/5 lg:ml-[10%] "
        >
          <h2 className="font-sans uppercase italic text-base font-light">
            {technologies}
          </h2>
          <h1 className="text-5xl md:text-6xl pt-2 pb-8 lowercase">{title}</h1>
          <p className="ml-[10%] text-sm">{description}</p>
          <div className="mt-5 ml-[10%] flex gap-2">
            <a
              className="text-sm uppercase tracking-wide transition-all hover:text-primary-200"
              target="_blank"
              href={liveLink}
            >
              View live
            </a>
            {codeLink && (
              <a
                className="text-sm uppercase tracking-wide transition-all hover:text-primary-200"
                target="_blank"
                href={codeLink}
              >
                View code
              </a>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.3 }}
          className="w-4/5 lg:w-[45%] h-full"
        >
          <img
            src={pcScreenshot.src}
            alt={pcScreenshot.alt}
            className="max-w-full h-auto block"
          />
        </motion.div>
      </header>
      <main className="w-full">
        <section className="my-16">
          <div className="wrapper">
            {mobileScreenshot && (
              <div className="flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, translateX: 100 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1.3 }}
                >
                  <img
                    src={mobileScreenshot?.src}
                    alt={mobileScreenshot?.alt}
                    className="max-w-full h-auto block"
                  />
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
