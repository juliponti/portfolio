import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
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
import TAYLORDLE_SCREENSHOT from "/src/assets/projects/taylordle-screenshot.png";
import ISELL_SCREENSHOT from "/src/assets/projects/iphone-screenshot.png";

import useImagePreloader from "./hooks/use-image-preloader";
import RecentWorkCards from "./components/recent-projects/recent-projects-card";
import BeginningsWorkCards from "./components/beginnings-projects-cards/beginnings-projects-cards";

const preloadSrcList = [
  POKEDEX_PC,
  POKEDEX_MOBILE,
  MELI_PC,
  MELI_MOBILE,
  MAGIC_BALL_PC,
  MAGIC_BALL_MOBILE,
  SPLITTER_PC,
  SPLITTER_MOBILE,
  TO_DO_LIST_PC,
  TO_DO_LIST_MOBILE,
  SPACE_PC,
  SPACE_MOBILE,
  MLH_PC,
  TAYLORDLE_SCREENSHOT,
  ISELL_SCREENSHOT,
];

function App() {
  useImagePreloader(preloadSrcList);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="recents" element={<RecentWorkCards />} />
          <Route path="beginnings" element={<BeginningsWorkCards />} />
        </Route>
        <Route
          path="/projects/beginnings/pokedex"
          element={
            <ProjectLayout
              title="Pokedex"
              description={
                <>
                  Exercise for{" "}
                  <a
                    href="https://twitter.com/courseitok"
                    target="_blank"
                    className="font-semibold">
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
          path="/projects/beginnings/mercado-libre"
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
                    className="font-semibold">
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
          path="/projects/beginnings/magic-eight-ball"
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
          path="/projects/beginnings/splitter"
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
                    className="font-semibold">
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
          path="/projects/beginnings/to-do-list"
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
          path="/projects/beginnings/space-tourism"
          element={
            <ProjectLayout
              title="Space Tourism"
              description={
                <>
                  This is a solution to the{" "}
                  <a
                    href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
                    target="_blank"
                    className="font-semibold">
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
          path="/projects/recents/my-little-house"
          element={
            <ProjectLayout
              title="My Little House"
              description={
                <>
                  A collaborative freelancer project for a client that wanted a
                  backroom web app for an English Language Institute called "My
                  Little House". Built using server components some
                  functionalities include adding courses and students, charging
                  invoices, seeing statistics, controlling the incomes, the
                  outcomes, and more{" "}
                </>
              }
              technologies="Next JS 14 | Prisma | Shadcn UI"
              pcScreenshot={{
                src: MLH_PC,
                alt: "web screenshot of an app customize by me",
              }}
              liveLink="https://my-little-house-demo-git-engl-b5826a-julietas-projects-dee94194.vercel.app/students"
            />
          }
        />
        <Route
          path="/projects/recents/taylordle-game"
          element={
            <ProjectLayout
              title="Taylordle Game"
              description={
                <>
                  This is the final project of{" "}
                  <Link
                    to="https://www.joyofreact.com/"
                    target="_blank"
                    className="underline hover:text-primary-200">
                    The Joy of React
                  </Link>{" "}
                  course. It is a replica of the game <strong>Wordle</strong>,
                  but I have customized it with a Taylor Swift theme for a more
                  personal touch.
                  <p>
                    The goal of the game is to deduce the word in six guesses or
                    fewer. A green background indicates a correctly placed
                    letter; a yellow/orange background that the letter is part
                    of the word but in the wrong position and a dark gray
                    background indicates the letter is not part of the word at
                    all.
                  </p>
                  The hidden word relates to Taylor Swift's music and life.
                </>
              }
              technologies="React | CSS3 | JavaScript"
              pcScreenshot={{
                src: TAYLORDLE_SCREENSHOT,
                alt: "a wordle clone screenshot",
              }}
              liveLink="https://juliponti.github.io/project-wordle/"
              codeLink="https://github.com/juliponti/project-wordle"
            />
          }
        />
        <Route
          path="/projects/recents/iSell-iPhone"
          element={
            <ProjectLayout
              title="iSell iPhone"
              description={
                <>
                  This is web app for a client that wanted to keep track of
                  their iPhones and products sales.
                  <p className="mt-4">
                    The functionalities include:
                    <ul className="mt-2">
                      <li className="list-disc ml-6">
                        Add, edit, delete and sell iPhones and products
                      </li>
                      <li className="list-disc ml-6">
                        See the total amount of profits per day and per month
                      </li>
                      <li className="list-disc ml-6">
                        See the total amount of iPhones sold per day
                      </li>
                      <li className="list-disc ml-6">
                        See the total amount of sales per day
                      </li>
                      <li className="list-disc ml-6">
                        See the current stock of iPhones and products
                      </li>
                      <li className="list-disc ml-6">
                        Filter the iPhones by model
                      </li>
                      <li className="list-disc ml-6">
                        See the current exchange rate
                      </li>
                    </ul>
                  </p>
                  <p className="mt-4">
                    Stack & Tools:
                    <ul className="mt-2">
                      <li className="list-disc ml-6">
                        Next JS 15 - App Router - Server Actions
                      </li>
                      <li className="list-disc ml-6">
                        Tailwind CSS / Shadcn UI
                      </li>
                      <li className="list-disc ml-6">TypeScript</li>
                      <li className="list-disc ml-6">Prisma - PostgreSQL</li>
                      <li className="list-disc ml-6">Zod - Validation</li>
                      <li className="list-disc ml-6">
                        React Hook Form - Form Handling
                      </li>
                      <li className="list-disc ml-6">Recharts - Charts</li>
                      <li className="list-disc ml-6">Vercel - Deployment</li>
                      <li className="list-disc ml-6">Neon Database</li>
                    </ul>
                  </p>
                </>
              }
              technologies="Next JS 15 | Tailwind CSS | Shadcn UI"
              pcScreenshot={{
                src: ISELL_SCREENSHOT,
                alt: "a screenshot of the iSell iPhone app",
              }}
              liveLink="https://hello-iphone-app-demo.vercel.app"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
