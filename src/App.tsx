import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import ProjectLayout from "./pages/projects/project-layout";

import POKEDEX_PC from "/src/assets/projects/beginnings/screenshots/pokedex-screenshot.png";
import POKEDEX_MOBILE from "/src/assets/projects/beginnings/screenshots/pokedex-mobile.png";
import MELI_PC from "/src/assets/projects/beginnings/screenshots/meli-screenshot.png";
import MELI_MOBILE from "/src/assets/projects/beginnings/screenshots/meli-mobile.png";
import MAGIC_BALL_PC from "/src/assets/projects/beginnings/screenshots/magic-ball-screenshot.png";
import MAGIC_BALL_MOBILE from "/src/assets/projects/beginnings/screenshots/magic-ball-mobile.png";
import SPLITTER_PC from "/src/assets/projects/beginnings/screenshots/splitter-screenshot.png";
import SPLITTER_MOBILE from "/src/assets/projects/beginnings/screenshots/splitter-mobile.png";
import TO_DO_LIST_PC from "/src/assets/projects/beginnings/screenshots/to-do-list-screenshot.png";
import TO_DO_LIST_MOBILE from "/src/assets/projects/beginnings/screenshots/to-do-list-mobile.png";
import SPACE_PC from "/src/assets/projects/beginnings/screenshots/space-screenshot.png";
import SPACE_MOBILE from "/src/assets/projects/beginnings/screenshots/space-mobile.png";
import MLH_PC from "/src/assets/projects/MLH-screenshot.png";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/pokedex"
          element={
            <ProjectLayout
              title="Pokedex"
              description={
                <>
                  Exercise for{" "}
                  <a
                    href="https://twitter.com/courseitok"
                    target="_blank"
                    className="font-semibold"
                  >
                    CourseIt
                  </a>{" "}
                  course to learn how to consume an API. Given the public
                  Pokemon API the goal was to create a search bar that returns
                  the image and the name of the Pokemon that you looked for. No
                  design was provided.
                </>
              }
              technologies="HTML | CSS | JavaScript "
              pcScreenshot={{
                src: POKEDEX_PC,
                alt: "web screenshot of a red pokedex customized by me",
              }}
              mobileScreenshot={{
                src: POKEDEX_MOBILE,
                alt: "mobile screenshot of a red pokedex customized by me",
              }}
              liveLink="https://juliponti.github.io/fetch-pokedex/"
              codeLink="https://github.com/juliponti/fetch-pokedex/blob/master/README.md"
            />
          }
        />
        <Route
          path="/projects/mercado-libre"
          element={
            <ProjectLayout
              title="Mercado Libre"
              description={
                <>
                  {" "}
                  Final project of the React course of{" "}
                  <a
                    href="https://twitter.com/courseitok"
                    target="_blank"
                    className="font-semibold"
                  >
                    CourseIt
                  </a>{" "}
                  . Bootstrapped with Create React App. The goal was to create
                  two screens based on the 'Mercado Libre' page using it's API
                  and dynamic routing{" "}
                </>
              }
              technologies="React | SASS | API | React Router Dom"
              pcScreenshot={{
                src: MELI_PC,
                alt: "web screenshot of a Mercado Libre webpage clon customized by me",
              }}
              mobileScreenshot={{
                src: MELI_MOBILE,
                alt: "mobile screenshot of a Mercado Libre webpage clon customized by me",
              }}
              liveLink="https://juliponti.github.io/meli-react-app/"
              codeLink="https://github.com/juliponti/meli-react-app/tree/master"
            />
          }
        />
        <Route
          path="/projects/magic-eight-ball"
          element={
            <ProjectLayout
              title="Magic Eight Ball"
              description={
                <>
                  Based on the classic game from 1980 (although I first learned
                  about it from Toy Story 😂) this game serves as a fortune
                  teller that can answer yes or no questions. I was inspired to
                  create it while working on an exercise from Free Code Camp
                </>
              }
              technologies="React | Tailwind CSS | Responsive "
              pcScreenshot={{
                src: MAGIC_BALL_PC,
                alt: "web screenshot of a Magic Eight Ball webpage customized by me",
              }}
              mobileScreenshot={{
                src: MAGIC_BALL_MOBILE,
                alt: " mobile screenshot of a Magic Eight Ball webpage customized by me",
              }}
              liveLink="https://juliponti.github.io/magic-eight-ball-app/"
              codeLink="https://github.com/juliponti/magic-eight-ball-app"
            />
          }
        />
        <Route
          path="/projects/splitter"
          element={
            <ProjectLayout
              title="Tip Calculator App"
              description={
                <>
                  {" "}
                  This is a solution to the{" "}
                  <a
                    href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
                    target="_blank"
                    className="font-semibold"
                  >
                    Tip calculator app challenge on Frontend Mentor
                  </a>
                  . Users should be able to: calculate the correct tip and total
                  cost of the bill per person, view the optimal layout for the
                  app depending on their device's screen size and see hover
                  states for all interactive elements on the page
                </>
              }
              technologies="HTML5 | SASS | JavaScript"
              pcScreenshot={{
                src: SPLITTER_PC,
                alt: "web screenshot of a Tip Calculator App",
              }}
              mobileScreenshot={{
                src: SPLITTER_MOBILE,
                alt: "mobile screenshot of a Tip Calculator App",
              }}
              liveLink="https://juliponti.github.io/tip-calculator-app/"
              codeLink="https://github.com/juliponti/tip-calculator-app"
            />
          }
        />
        <Route
          path="/projects/to-do-list"
          element={
            <ProjectLayout
              title="To do list"
              description={
                <>
                  A simple to-do-list to practice react states and useContext.
                  It's in Spanish.
                </>
              }
              technologies="React | Sass | Context"
              pcScreenshot={{
                src: TO_DO_LIST_PC,
                alt: "web screenshot of a to-do list App customize by me",
              }}
              mobileScreenshot={{
                src: TO_DO_LIST_MOBILE,
                alt: "mobile screenshot of a to-do list App customized by me",
              }}
              liveLink="https://juliponti.github.io/to-do-list/"
              codeLink="https://github.com/juliponti/to-do-list/tree/master"
            />
          }
        />
        <Route
          path="/projects/space-tourism"
          element={
            <ProjectLayout
              title="Space Tourism"
              description={
                <>
                  This is a solution to the{" "}
                  <a
                    href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
                    target="_blank"
                    className="font-semibold"
                  >
                    Space tourism website challenge on Frontend Mentor
                  </a>{" "}
                  . The users should be able to: view each page and be able to
                  toggle between the tabs to see new information, view the
                  optimal layout for each of the website's pages depending on
                  their device's screen size and see hover states for all
                  interactive elements on the page
                </>
              }
              technologies="React | Tailwind CSS | Responsive"
              pcScreenshot={{
                src: SPACE_PC,
                alt: "web screenshot of a Space Tourism app",
              }}
              mobileScreenshot={{
                src: SPACE_MOBILE,
                alt: "mobile screenshot of Space Tourism app",
              }}
              liveLink="https://juliponti.github.io/space-tourism-website/"
              codeLink="https://github.com/juliponti/space-tourism-website"
            />
          }
        />
        <Route
          path="/projects/my-little-house"
          element={
            <ProjectLayout
              title="My Little House"
              description={
                <>
                  A collaborative freelancer project for a client that wanted a
                  backroom web app for an English Language Institute called "My
                  Little House". Some functionalities include adding courses and
                  students, charging invoices, seeing statistics, controlling
                  the incomes, the outcomes, etc.{" "}
                </>
              }
              technologies="Next JS | Prisma | Shadcn UI"
              pcScreenshot={{
                src: MLH_PC,
                alt: "web screenshot of an app customize by me",
              }}
              liveLink="https://my-little-house-demo-git-engl-b5826a-julietas-projects-dee94194.vercel.app/students"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
