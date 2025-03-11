import { Outlet } from "react-router";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Dashboard } from "../components/Dashboard";
import { Metrics } from "../components/Metrics";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Dashboard />
      <Metrics />
      <Footer />
      <Outlet />
    </>
  );
}

export default Home;
