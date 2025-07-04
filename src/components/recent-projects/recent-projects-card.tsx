import { motion } from "framer-motion";
import { Project } from "../../types";
import MLH_IMG from "/src/assets/projects/1.png";
import TAYLORDLE_IMG from "/src/assets/projects/taylordle.png";
import ISell_IMG from "/src/assets/projects/iphone.png";
import { Link } from "react-router-dom";

const recentProjects: Project[] = [
  {
    name: "iSell iPhone",
    path: "/projects/recents/iSell-iPhone",
    src: ISell_IMG,
    alt: "An iPhone silhouette",
    id: 3,
    isActive: true,
  },
  {
    name: "Taylordle Game",
    path: "/projects/recents/taylordle-game",
    src: TAYLORDLE_IMG,
    alt: "A grid of letters",
    id: 2,
    isActive: true,
  },
  {
    name: "My little house",
    path: "/projects/recents/my-little-house",
    src: MLH_IMG,
    alt: "A minimalistic house made of black lines with flowers",
    id: 1,
    isActive: true,
  },
];

export default function RecentWorkCards() {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3  row-auto gap-3 pb-10"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}>
        {recentProjects.map(({ name, path, src, id, alt, isActive }) => (
          <motion.div
            key={id}
            className="relative"
            whileHover={{ scale: 0.94 }}>
            <img src={src} alt={alt} className="rounded-2xl w-full " />
            {isActive ? (
              <Link
                to={path}
                className="h-full w-full flex justify-center absolute top-0 left-0 items-center bg-primary-300 text-white opacity-0 rounded-2xl hover:opacity-90 transition-all"
                rel="noreferrer">
                <h3 className="lowercase text-2xl">{name}</h3>
              </Link>
            ) : (
              <div className="h-full w-full flex justify-center absolute top-0 left-0 items-center bg-primary-300 text-white opacity-0 rounded-2xl hover:opacity-90 transition-all">
                <h3 className="lowercase text-2xl">{name}</h3>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
