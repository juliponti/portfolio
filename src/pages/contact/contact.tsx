import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Navbar />
      <header className="relative z-10 pt-20 pb-14 mx-auto w-[94%] md:max-w-[840px]">
        <div className="wrapper">
          <h1 className="text-6xl lowercase mb-7 text-center">Let's connect</h1>
          <p className="text-sm">
            Interested in collaborating? Don't hesitate to get in touch! Drop me
            a line here or at my email{" "}
            <Link className="underline" to="mailto:julieta.pontino@gmail.com">
              julieta.pontino@gmail.com
            </Link>{" "}
            to explore opportunities further. Remember, all fields are required!
          </p>
        </div>
      </header>
      <main className="w-full relative z-10">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
