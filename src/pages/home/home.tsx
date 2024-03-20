import Header from "../../components/header";
import MainQuote from "../../components/main-quote/main-quote";
import Navbar from "../../components/navbar";
import RecentWork from "../../components/recent-work/recent-work";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <MainQuote />
      <RecentWork />
    </div>
  );
}
