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
    <>
      <Navbar />
      <header className="flex flex-wrap items-center justify-between max-w-[1900px] mx-auto overflow-x-hidden lg:ml-auto lg:mr-0">
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.3 }}
          className="w-2/5 ml-[10%] "
        >
          <h2 className="font-sans uppercase italic text-base font-light">
            {technologies}
          </h2>
          <h1 className="text-6xl pt-2 pb-8 lowercase">{title}</h1>
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
          className="w-[45%] h-full"
        >
          <img
            src={pcScreenshot.src}
            alt={pcScreenshot.alt}
            className="max-w-full h-auto block"
          />
        </motion.div>
      </header>
      <main>
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
      {mobileScreenshot ? (
        <Footer />
      ) : (
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      )}
    </>
  );
}
