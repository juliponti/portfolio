import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { MdOutlineFlipToBack, MdOutlineFlipToFront } from "react-icons/md";

interface ExperienceCardProps {
  flip: boolean;
  onFlip: Dispatch<SetStateAction<boolean>>;
  front: JSX.Element;
  back: JSX.Element;
}

export default function ExperienceCard({
  flip,
  onFlip,
  front,
  back,
}: ExperienceCardProps) {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      animate={{ rotateY: flip ? 0 : 180 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        transition={{ duration: 0.5 }}
        animate={{ rotateY: flip ? 0 : 180 }}
        className="card-shadow transition-shadow p-5 rounded-2xl"
      >
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className={flip ? "front relative h-[390px]" : "hidden"}
        >
          <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => onFlip((prevState) => !prevState)}
            title="Flip"
          >
            <MdOutlineFlipToFront />
          </button>

          {front}
        </motion.div>
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: flip ? 180 : 0 }}
          transition={{ duration: 0.7 }}
          className={flip ? "hidden" : "back relative h-[390px]"}
        >
          <button
            type="button"
            className="absolute top-2 right-2"
            onClick={() => onFlip((prevState) => !prevState)}
            title="Flip"
          >
            <MdOutlineFlipToBack />
          </button>
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
