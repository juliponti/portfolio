import Contact from "../../components/contact/contact";
import WorkExperience from "../../components/work-experience";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import MainQuote from "../../components/main-quote/main-quote";
import Navbar from "../../components/navbar";
import RecentWork from "../../components/recent-work/recent-work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <MainQuote />
        <RecentWork />
        <Contact />
        <WorkExperience />
      </main>
      <Footer />
    </>
  );
}
