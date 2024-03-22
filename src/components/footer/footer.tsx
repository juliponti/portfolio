import Logo from "../navbar/logo";
import SocialMedia from "../social-media";
import FooterNavbar from "./footer-navbar";

export default function Footer() {
  return (
    <footer className="bg-primary-300 text-[#f3f6f4] pt-10 pb-5">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <Logo />
          </div>
          <FooterNavbar />
          <SocialMedia />
        </div>
        <p className="text-center uppercase pt-5 pb-3 text-xs copyright">
          © 2024 designed by{" "}
          <a
            href="https://www.kaystocks.com/"
            target="_black"
            className="font-semibold"
          >
            Kay Evans-Stocks
          </a>{" "}
          coded by{" "}
          <a href="https://github.com/juliponti" className="font-semibold">
            me
          </a>
        </p>
      </div>
    </footer>
  );
}
