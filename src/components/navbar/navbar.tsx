import Logo from "./logo";
import Navlinks from "./navlinks";

export default function Navbar() {
  return (
    <nav className="py-3">
      <div className="flex flex-wrap justify-between items-center max-w-[1200px] w-4/5 mx-auto">
        <Logo />
        <Navlinks />
      </div>
    </nav>
  );
}
