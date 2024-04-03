import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <>
      <Navbar />
      <header className="pt-20 pb-14 mx-auto w-[850px]">
        <div className="wrapper">
          <h1 className="text-6xl lowercase mb-7 text-center">Let's connect</h1>
          <p className="text-sm">
            Interested in collaborating? Don't hesitate to get in touch! Drop me
            a line here or at my email{" "}
            <a className="underline" href="mailto:julieta.pontino@gmail.com">
              julieta.pontino@gmail.com
            </a>{" "}
            to explore opportunities further. Remember, all fields are required!
          </p>
        </div>
      </header>
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
