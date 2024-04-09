import { motion } from "framer-motion";
import { Project } from "../../types";

const recentProjects: Project[] = [
  {
    name: "My little house",
    link: "/projects/my-little-house",
    src: "/src/assets/projects/1.png",
    id: 1,
  },
  {
    name: "placeholder",
    link: "",
    src: "/src/assets/projects/2.png",
    id: 2,
  },
  {
    name: "placeholder",
    link: "",
    src: "/src/assets/projects/3.png",
    id: 3,
  },
];

export default function RecentWorkCards() {
  return (
    <motion.div
      className="grid grid-cols-3 row-auto gap-3 pb-10"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      {recentProjects.map(({ name, link, src, id }) => (
        <motion.div key={id} className="relative" whileHover={{ scale: 0.94 }}>
          <img
            src={src}
            alt="part of a pink sky with clouds"
            className="rounded-2xl w-full "
          />

          <a
            href={link}
            className="h-full w-full flex justify-center absolute top-0 left-0 items-center bg-primary-300 text-white opacity-0 rounded-2xl hover:opacity-90 transition-all"
            rel="noreferrer"
          >
            <h3 className="lowercase text-2xl ">{name}</h3>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
