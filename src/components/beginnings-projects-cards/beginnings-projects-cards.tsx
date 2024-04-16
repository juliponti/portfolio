import { motion } from "framer-motion";
import { Project } from "../../types";

const beginningsProjects: Project[] = [
  {
    name: "Pokedex",
    link: "/projects/pokedex",
    src: "/src/assets/projects/beginnings/pokemon.png",
    className: "bg-[#E05454] sm:row-span-2 sm:col-start-1",
  },
  {
    name: "Tip Calculator App",
    link: "/projects/splitter",
    src: "/src/assets/projects/beginnings/splitter.png",
    className: "bg-[#C5E4E7] sm:row-span-3 sm:col-start-2",
  },
  {
    name: "Mercado Libre",
    link: "/projects/mercado-libre",
    src: "/src/assets/projects/beginnings/meli.png",
    className:
      "bg-[#FB9F00] sm:row-span-4 sm:row-start-3 md:row-span-2 md:row-start-1 md:col-start-3",
  },
  {
    name: "To do list",
    link: "/projects/to-do-list",
    src: "/src/assets/projects/beginnings/to-do.png",
    className:
      "bg-[#EEDFE7] sm:row-span-2 sm:col-start-2 sm:row-start-4 md:row-span-3 md:col-start-1 md:row-start-3",
  },
  {
    name: "Magic eight ball",
    link: "/projects/magic-eight-ball",
    src: "/src/assets/projects/beginnings/magic-ball.png",
    className:
      "bg-[#7088AA] sm:row-span-3 sm:col-start-2 sm:row-start-6 md:row-span-2 md:col-start-2 md:row-start-4 ",
  },
  {
    name: "Space Tourism",
    link: "/projects/space-tourism",
    src: "/src/assets/projects/beginnings/space.png",
    className:
      "bg-[#11203A] sm:row-span-2 sm:col-start-1 sm:row-start-7 md:row-span-3 md:col-start-3 md:row-start-3",
  },
];

export default function BeginningsWorkCards() {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 sm:grid-rows-8 sm:gap-4 md:grid-cols-3 md:grid-rows-5 md:gap-3 pb-10"
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
            <h3 className="lowercase text-2xl px-7 ">{name}</h3>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
