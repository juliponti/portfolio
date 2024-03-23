import WorkExperience from "../../components/work-experience";
import Navbar from "../../components/navbar";
import Photos from "../../components/photos";
import Skills from "../../components/skills/skills";
import { AboutHeader } from "./about-header";
import Footer from "../../components/footer/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHeader />
      <main>
        <Skills />
        <Photos />
        <WorkExperience />
        <Footer />
      </main>
    </>
  );
}
