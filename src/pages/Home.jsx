import { Outlet } from "react-router";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Dashboard } from "../components/Dashboard";
import { Metrics } from "../components/Metrics";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Dashboard />
      <Metrics />
      <Outlet />
    </>
  );
}

export default Home;
