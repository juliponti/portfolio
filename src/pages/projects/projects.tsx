import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/ui/button";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const location = useLocation();

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
                    location.pathname === "/projects/recents"
                      ? "bg-primary-200 text-white"
                      : "bg-primary-100"
                  }
                  onClick={() => {
                    navigate("/projects/recents");
                  }}>
                  recents
                </Button>
              </li>
              <li>
                <Button
                  className={
                    location.pathname === "/projects/beginnings"
                      ? "bg-primary-200 text-white"
                      : "bg-primary-100"
                  }
                  onClick={() => {
                    navigate("/projects/beginnings");
                  }}>
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
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
