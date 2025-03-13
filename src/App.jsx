import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
