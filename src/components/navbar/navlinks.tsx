const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navlinks() {
  return (
    <div>
      <ul className="flex flex-wrap items-center">
        {navlinks.map(({ name, href }) => (
          <li
            key={name}
            className="uppercase tracking-[0.110rem]  ml-7 text-xs hover:text-primary-200"
          >
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
