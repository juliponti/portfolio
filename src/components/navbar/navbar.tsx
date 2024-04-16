import useWindowDimensions from "../../hooks/use-window-dimensions";
import HamburgerMenu from "./hamburger-menu";
import Logo from "./logo";
import { Navlinks } from "./navlinks";

export default function Navbar() {
  const { width } = useWindowDimensions();
  return (
    <nav className="w-full py-3">
      <div className="flex flex-wrap justify-between items-center wrapper">
        <Logo />
        {width >= 840 ? (
          <Navlinks className="flex-row items-center" />
        ) : (
          <HamburgerMenu />
        )}
      </div>
    </nav>
  );
}
