import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

const socialMedia = [
  {
    name: "Linkend In",
    link: "https://www.linkedin.com/in/julieta-pontino-3a168b211/",
    logo: <FaLinkedinIn className="w-4" />,
  },
  {
    name: "Github",
    link: "https://github.com/juliponti",
    logo: <FaGithub className="w-4" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/julipontino/",
    logo: <FaInstagram className="w-4" />,
  },
];

export default function SocialMedia() {
  return (
    <ul className="flex flex-wrap">
      {socialMedia.map(({ name, link, logo }) => (
        <li className="mr-4" key={name} title={name}>
          <a href={link} target="_blank" aria-label={`View ${name} page`}>
            {logo}
          </a>
        </li>
      ))}
    </ul>
  );
}
