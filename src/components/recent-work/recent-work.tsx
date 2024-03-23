import { Project } from "../../types";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    name: "My little house",
    link: "/my-little-house",
    src: "/src/assets/projects/001.png",
  },
  {
    name: "placeholder",
    link: "*",
    src: "/src/assets/projects/002.png",
  },
  {
    name: "placeholder",
    link: "*",
    src: "/src/assets/projects/003.png",
  },
];

export default function RecentWork() {
  return (
    <section className="text-center pb-20">
      <div className="wrapper">
        <h3 className="lowercase text-2xl tracking-widest pb-10 ">
          My recent work
        </h3>
        <motion.div
          className="grid grid-cols-3 row-auto gap-3 pb-10"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map(({ name, link, src }) => (
            <div key={name} className="relative">
              <img
                src={src}
                alt="part of a pink sky with clouds"
                className="rounded-2xl w-full "
              />

              <a
                href={link}
                className="h-full w-full flex justify-center absolute top-0 left-0 items-center bg-primary-300 text-white opacity-0 rounded-2xl hover:opacity-90 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="lowercase text-2xl ">{name}</h3>
              </a>
            </div>
          ))}
        </motion.div>
        <a
          href="/projects"
          className="uppercase tracking-widest text-sm hover:text-primary-200"
        >
          view all work
        </a>
      </div>
    </section>
  );
}
