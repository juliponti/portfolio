import RecentProjectsCards from "./recent-projects-card";

export default function RecentWork() {
  return (
    <section className="text-center pb-20">
      <div className="wrapper">
        <h3 className="lowercase text-2xl tracking-widest pb-10 ">
          My recent projects
        </h3>
        <RecentProjectsCards />
        <a
          href="/projects"
          className="uppercase tracking-widest text-sm hover:text-primary-200"
        >
          view all projects
        </a>
      </div>
    </section>
  );
}
