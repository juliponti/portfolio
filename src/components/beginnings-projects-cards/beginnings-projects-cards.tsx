import { motion } from "framer-motion";
import { Project } from "../../types";
import pokedexImg from "/src/assets/projects/beginnings/pokemon.png";
import tipCalculatorImg from "/src/assets/projects/beginnings/splitter.png";
import meliImg from "/src/assets/projects/beginnings/meli.png";
import toDoListImg from "/src/assets/projects/beginnings/to-do.png";
import magicBallImg from "/src/assets/projects/beginnings/magic-ball.png";
import spaceImg from "/src/assets/projects/beginnings/space.png";
import { Link } from "react-router-dom";

const beginningsProjects: Project[] = [
  {
    name: "Pokedex",
    path: "/projects/beginnings/pokedex",
    src: pokedexImg,
    alt: "Red background with an aiming point in the center with a question mark inside of it",
    className: "bg-[#E05454] sm:row-span-2 sm:col-start-1",
  },
  {
    name: "Tip Calculator App",
    path: "/projects/beginnings/splitter",
    src: tipCalculatorImg,
    alt: "sky blue background with three dolar signs in a row",
    className: "bg-[#C5E4E7] sm:row-span-3 sm:col-start-2",
  },
  {
    name: "Mercado Libre",
    path: "/projects/beginnings/mercado-libre",
    src: meliImg,
    alt: "orange background with a cartoon white cat jumping in front of cash money",
    className:
      "bg-[#FB9F00] sm:row-span-4 sm:row-start-3 md:row-span-2 md:row-start-1 md:col-start-3",
  },
  {
    name: "To do list",
    path: "/projects/beginnings/to-do-list",
    src: toDoListImg,
    alt: "pink background with a blue circle in the center and a cartoon octopus inside of it",
    className:
      "bg-[#EEDFE7] sm:row-span-2 sm:col-start-2 sm:row-start-4 md:row-span-3 md:col-start-1 md:row-start-3",
  },
  {
    name: "Magic eight ball",
    path: "/projects/beginnings/magic-eight-ball",
    src: magicBallImg,
    alt: "cerulean blue background with a billiard 8 ball in the center",
    className:
      "bg-[#7088AA] sm:row-span-3 sm:col-start-2 sm:row-start-6 md:row-span-2 md:col-start-2 md:row-start-4 ",
  },
  {
    name: "Space Tourism",
    path: "/projects/beginnings/space-tourism",
    src: spaceImg,
    alt: "dark blue background with a moon in the center",
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
      transition={{ duration: 0.5 }}>
      {beginningsProjects.map(({ name, path, src, className, alt }) => (
        <motion.div
          key={name}
          className={`relative rounded-2xl grid  ${className}`}
          whileHover={{ scale: 0.94 }}>
          <img
            src={src}
            alt={alt}
            className="rounded-2xl w-full place-self-center"
          />

          <Link
            to={path}
            className="h-full w-full flex justify-center absolute top-0 left-0 items-center bg-primary-300 text-white opacity-0 rounded-2xl hover:opacity-90 transition-all"
            rel="noreferrer">
            <h3 className="lowercase text-2xl px-7 ">{name}</h3>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
