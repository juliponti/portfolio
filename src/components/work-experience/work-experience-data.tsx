import { RxDotFilled } from "react-icons/rx";
import FrontCardLayout from "./card-layout/front-card-layout";
import BackCardLayout from "./card-layout/back-card-layout";
import AltimetrikLogo from "/src/assets/experience/altimetrik_logo.png";
import FundingCircleLogo from "/src/assets/experience/funding_circle_logo.png";
import WDLogo from "/src/assets/experience/western_digital_logo.png";
import SiftedLogo from '/src/assets/experience/sifted_logo.svg';

export const frontAltimetrik = (
  <FrontCardLayout
    imgHref="https://www.altimetrik.com/"
    img={
      <img src={AltimetrikLogo} alt="Altimetrik Logo" className="w-28 h-28" />
    }
    title="Altimetrik"
  >
    <div className="flex">
      <div>
        <span className="block rounded-full h-2 w-2 bg-gray-400 mt-2"></span>
        <div className="border-r h-[73px] w-1 border-r-gray-400" />
        <span className="block  rounded-full h-2 w-2 bg-gray-400"></span>
      </div>

      <ul>
        <li className="font-sans pb-4 text-[#686868] text-base flex gap-2">
          <div className=" ml-5">
            <p className="font-semibold">Frontend developer</p>
            <p className="text-sm">full time</p>
            <p className="text-sm">Dec 2022 - Jan 2024</p>
          </div>
        </li>
        <li className="font-sans pb-4 text-[#686868] text-base flex gap-2">
          <div className="ml-5">
            <p className="font-semibold">Frontend intern</p>
            <p className="text-sm">part time</p>
            <p className="text-sm">Oct 2022 - Dec 2022</p>
          </div>
        </li>
      </ul>
    </div>
  </FrontCardLayout>
);

export const backAltimetrik = (
  <BackCardLayout>
    <>
      <p className="text-sm text-center mt-5">
        I participated in the Altimetrik BEFDA (Become a Front-end Developer
        with Altimetrik) Bootcamp and successfully overcame various challenges
        along the way, ultimately accomplishing the Altimetrik Internship and
        securing a full-time job as a Frontend Developer.
      </p>

      <p className="text-sm text-center mt-2">
        I possess excellent communication and interpersonal skills, as well as
        experience working with scrum methodologies, adhering to frontend best
        practices, and utilizing the latest technologies and tools.
      </p>
    </>
  </BackCardLayout>
);

export const frontFC = (
  <FrontCardLayout
    imgHref="https://www.fundingcircle.com/uk/"
    img={
      <img
        src={FundingCircleLogo}
        alt="Funding Circle Logo"
        className="w-40 h-40"
      />
    }
    title="Funding Circle"
    tooltip="Altimetrik's client"
  >
    <ul>
      <li className="font-sans pb-4 text-[#686868] text-base flex gap-2">
        <div className="ml-5">
          <p className="font-semibold">Frontend developer</p>
          <p className="text-sm">temporary contract</p>
          <p className="text-sm">Jun 2023 - Jan 2024</p>
        </div>
      </li>
      <li>
        <div className="ml-5">
          <p className="text-sm">
            <span className="font-semibold">Project: </span>Platform Backstage
          </p>
          <p className="text-sm">
            <span className="font-semibold">Methodologies: </span> scrum
          </p>
        </div>
      </li>
    </ul>
  </FrontCardLayout>
);

export const backFC = (
  <BackCardLayout>
    <>
      <p className="text-sm text-center mt-5">
        My responsibility was to maintain, update, and upgrade the client's{" "}
        <a
          href="https://backstage.io/"
          target="_blank"
          className="font-semibold hover:text-primary-200"
        >
          Platform Backstage
        </a>{" "}
        developer portal while also improving the UI and adding/developing
        plugins.
      </p>
      <span className="text-left w-full text-sm">Stack :</span>
      <ul className="text-sm w-full space-y-1">
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          React JS (Platform Backstage)
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Prostgresql
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Kubernetes / Docker
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          CSS: Backstage theme/ material ui
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Cypress
        </li>
      </ul>
    </>
  </BackCardLayout>
);

export const frontWDT = (
  <FrontCardLayout
    imgHref="https://www.westerndigital.com/"
    img={
      <img src={WDLogo} alt="Western Digital Logo" className="w-52 h-52" />
    }
    title="Western Digital"
    tooltip="Altimetrik's client"
  >
    <ul>
      <li className="font-sans pb-4 text-[#686868] text-base flex gap-2">
        <div className="relative  ml-5">
          <p className="font-semibold">Frontend developer</p>
          <p className="text-sm">temporary contract</p>
          <p className="text-sm">Mar 2023 - Apr 2023</p>
        </div>
      </li>
      <li>
        <div className="ml-5">
          <p className="text-sm">
            <span className="font-semibold">Project: </span> Organizational
            Chart
          </p>
          <p className="text-sm">
            <span className="font-semibold">Methodologies: </span> kanban
          </p>
        </div>
      </li>
    </ul>
  </FrontCardLayout>
);

export const backWDT = (
  <BackCardLayout>
    <>
      <p className="text-sm text-center mt-5">
        Based on a Javascript library the team had to design and build an
        organizational chart in NextJS
      </p>
      <span className="text-sm text-left w-full">Responsabilities :</span>
      <ul className="text-sm w-full space-y-1">
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Build features based on the client's requirements
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Collaborate on the creation of tasks
        </li>
        <li className="flex gap-2 ">
          <RxDotFilled className="mt-1" />
          Test & debug
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Analyze work done looking for improvements
        </li>
        <li className="flex gap-2 ">
          <RxDotFilled className="mt-1 w-7" />
          Assist and participate in client meetings to share and update the work
          achievements
        </li>
      </ul>
    </>
  </BackCardLayout>
);


export const frontSifted = (
  <>
  <FrontCardLayout
    imgHref="https://sifted.com/"
    img={
      <img src={SiftedLogo} alt="Sifted Logo" className="w-52 h-52" />
    }
    title="Sifted"
    tooltip="Sofware company"
  >
    <ul>
      <li className="font-sans pb-4 text-[#686868] text-base flex gap-2">
        <div className="relative  ml-5">
          <p className="font-semibold">UI developer</p>
          <p className="text-sm">temporary contract</p>
          <p className="text-sm">May 2024 - Nov 2024</p>
        </div>
      </li>
      <li>
        <div className="ml-5">
          <p className="text-sm">
            <span className="font-semibold">Project: </span> Sifted AI
          </p>
          <p className="text-sm">
            <span className="font-semibold">Methodologies: </span> scrum
          </p>
        </div>
      </li>
    </ul>
  </FrontCardLayout>
  </>
)

export const backSifted = (
    <BackCardLayout>
    <>
      <p className="text-sm text-center mt-5">
        I've worked close together with an agile team (API, UI and AnE) to developed an MVP of their new platform Sifted AI: The next iteration of their Logistics Intelligence product
      </p>
      <span className="text-left w-full text-sm">Stack :</span>
      <ul className="text-sm w-full space-y-1">
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          React JS (vite)
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          React Query
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Tailwind / Shadcn UI
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Axios
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Zustand
        </li>
        <li className="flex gap-2">
          <RxDotFilled className="mt-1" />
          Recharts
        </li>
      </ul>
    </>
  </BackCardLayout>
)