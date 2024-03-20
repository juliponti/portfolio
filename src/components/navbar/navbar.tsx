import Logo from "./logo";
import Navlinks from "./navlinks";

export default function Navbar() {
  return (
    <nav className="py-3">
      <div className="flex flex-wrap justify-between items-center wrapper">
        <Logo />
        <Navlinks />
      </div>
    </nav>
  );
}
