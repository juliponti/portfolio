import { useState } from "react";
import ExperienceCard from "./work-experience-card";
import {
  backCard1,
  backCard2,
  backCard3,
  frontCard1,
  frontCard2,
  frontCard3,
} from "./work-experience-data";

export default function WorkExperience() {
  const [flipCard1, setFlipCard1] = useState(true);
  const [flipCard2, setFlipCard2] = useState(true);
  const [flipCard3, setFlipCard3] = useState(true);

  return (
    <section className="py-[120px]">
      <div className="wrapper">
        <h3 className="text-center pb-10 lowercase">Work Experience</h3>
        <div className="grid grid-cols-3 row-auto gap-5">
          <ExperienceCard
            flip={flipCard1}
            onFlip={setFlipCard1}
            front={frontCard1}
            back={backCard1}
          />
          <ExperienceCard
            flip={flipCard2}
            onFlip={setFlipCard2}
            front={frontCard2}
            back={backCard2}
          />
          <ExperienceCard
            flip={flipCard3}
            onFlip={setFlipCard3}
            front={frontCard3}
            back={backCard3}
          />
        </div>
      </div>
    </section>
  );
}
