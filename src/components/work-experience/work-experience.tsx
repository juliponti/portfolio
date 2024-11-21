import { useState } from "react";
import ExperienceCard from "./work-experience-card";
import {
 frontAltimetrik,
 backAltimetrik,
 frontFC,
 backFC,
 frontSifted,
 backSifted,
 frontWDT,
 backWDT

} from "./work-experience-data";

export default function WorkExperience() {
  const [flipCard1, setFlipCard1] = useState(true);
  const [flipCard2, setFlipCard2] = useState(true);
  const [flipCard3, setFlipCard3] = useState(true);
  const [flipCard4, setFlipCard4] = useState(true);

  return (
    <section className="py-[120px]">
      <div className="max-w-[1200px] w-full mx-auto sm:w-4/5 ">
        <h3 className="text-center pb-10 lowercase">Work Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row-auto gap-5">
          <ExperienceCard
            flip={flipCard1}
            onFlip={setFlipCard1}
            front={frontSifted}
            back={backSifted}
          />
          <ExperienceCard
            flip={flipCard2}
            onFlip={setFlipCard2}
            front={frontAltimetrik}
            back={backAltimetrik}
          />
          <ExperienceCard
            flip={flipCard3}
            onFlip={setFlipCard3}
            front={frontFC}
            back={backFC}
          />
          <ExperienceCard
            flip={flipCard4}
            onFlip={setFlipCard4}
            front={frontWDT}
            back={backWDT}
            />
            </div>
     
      </div>
    </section>
  );
}
