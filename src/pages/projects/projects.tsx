import { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/ui/button";
import RecentProjectsCards from "../../components/recent-projects/recent-projects-card";
import BeginningsProjectsCards from "../../components/beginnings-projects-cards";

export default function Projects() {
  const [projectSelection, setProjectSelection] = useState({
    section: "recent",
  });

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <header className="pt-10 pb-14 relative z-10">
        <div className="wrapper">
          <h1 className="text-6xl lowercase pb-10">Projects</h1>
          <nav>
            <ul className="flex flex-wrap gap-2">
              <li>
                <Button
                  className={
                    projectSelection.section === "recent"
                      ? "bg-primary-200 text-white"
                      : "bg-primary-100"
                  }
                  onClick={() => {
                    setProjectSelection({ section: "recent" });
                  }}
                >
                  recent
                </Button>
              </li>
              <li>
                <Button
                  className={
                    projectSelection.section === "beginnings"
                      ? "bg-primary-200 text-white"
                      : "bg-primary-100"
                  }
                  onClick={() => {
                    setProjectSelection({ section: "beginnings" });
                  }}
                >
                  my beginnings
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="relative z-10">
        <section>
          <div className="wrapper">
            {projectSelection.section === "recent" ? (
              <RecentProjectsCards />
            ) : (
              <BeginningsProjectsCards />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
