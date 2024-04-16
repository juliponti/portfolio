import { motion } from "framer-motion";

const mySkills = [
  "HTML5",
  "Material UI",
  "Next JS",
  "MongoDB",
  "CSS3",
  "Javascript",
  "Node",
  "SEO practices",
  "SASS",
  "React",
  "Express",
  "Web accessibility",
  "Tailwind CSS",
  "RESTful APIs",
  "Postgresql",
  "Responsive web design",
];

export default function Skills() {
  return (
    <section className="py-[120px]">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="wrapper">
          <h2 className="font-serif mb-7 text-4xl lowercase">My skills</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {mySkills.map((skill) => (
              <li key={skill} className="mb-5 text-2xl sm:text-base ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
