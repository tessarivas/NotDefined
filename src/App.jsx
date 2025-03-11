import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      < Navbar />
      < Outlet />
    </>
  );
}

export default App;
