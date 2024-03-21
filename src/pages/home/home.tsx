import Contact from "../../components/contact/contact";
import Experience from "../../components/experience/experience";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import MainQuote from "../../components/main-quote/main-quote";
import Navbar from "../../components/navbar";
import RecentWork from "../../components/recent-work/recent-work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <MainQuote />
        <RecentWork />
        <Contact />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
