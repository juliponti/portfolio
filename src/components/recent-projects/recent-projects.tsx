import RecentProjectsCards from "./recent-projects-card";

export default function RecentWork() {
  return (
    <section className="py-[120px] text-center">
      <div className="wrapper">
        <h3 className="lowercase text-2xl tracking-widest pb-10 ">
          My recent projects
        </h3>
        <RecentProjectsCards />
        <a
          href="/projects/recents"
          className="uppercase tracking-widest text-sm hover:text-primary-200">
          view all projects
        </a>
      </div>
    </section>
  );
}
