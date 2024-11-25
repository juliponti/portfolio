import { navlinksData } from "./navlinks-data";

export function Navlinks({ className }: { className?: string }) {
  return (
    <div>
      <ul
        className={`flex flex-wrap gap-6 mt-5 mb-8 md:mt-0 md:mb-0 md:gap-0 md:items-center md:flex-row ${className}`}>
        {navlinksData.map(({ name, href }) => (
          <li
            key={name}
            className="uppercase tracking-[0.110rem]  md:ml-7 text-xs hover:text-primary-200">
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
