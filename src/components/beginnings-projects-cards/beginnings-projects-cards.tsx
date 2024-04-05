import { motion } from "framer-motion";
import { Project } from "../../types";

const beginningsProjects: Project[] = [
  {
    name: "Pokemon",
    link: "/projects/pokemon",
    src: "/src/assets/projects/beginnings/pokemon.png",
    className: "row-span-2 bg-[#E05454]",
  },
  {
    name: "Splitter",
    link: "/projects/splitter",
    src: "/src/assets/projects/beginnings/splitter.png",
    className: "row-span-2 col-start-3 row-start-1 bg-[#C5E4E7]",
  },
  {
    name: "Mercado Libre",
    link: "/projects/meli",
    src: "/src/assets/projects/beginnings/meli.png",
    className: "row-span-2 col-start-1 row-start-3 bg-[#FB9F00]",
  },
  {
    name: "To do list",
    link: "/projects/to-do-list",
    src: "/src/assets/projects/beginnings/to-do.png",
    className: "row-span-2 col-start-3 row-start-3 bg-[#EEDFE7]",
  },
  {
    name: "Magic eight ball",
    link: "/projects/magic-eight-ball",
    src: "/src/assets/projects/beginnings/magic-ball.png",
    className: "row-span-4 col-start-2 row-start-1 bg-[#7088AA]",
  },
];

export default function BeginningsWorkCards() {
  return (
    <motion.div
      className="grid grid-cols-3 grid-rows-4 gap-3 pb-10"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      {beginningsProjects.map(({ name, link, src, className }) => (
        <motion.div
          key={name}
          className={`relative rounded-2xl grid  ${className}`}
          whileHover={{ scale: 0.94 }}
        >
          <img
            src={src}
            alt="part of a pink sky with clouds"
            className="rounded-2xl w-full place-self-center"
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
