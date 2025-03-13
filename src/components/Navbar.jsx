import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhoto, setUserPhoto] = useState("");

  const toggleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserPhoto("");
    } else {
      setIsLoggedIn(true);
      setUserPhoto("https://via.placeholder.com/40");
    }
  };

  return (
    <div className="navbar bg-primary shadow-sm font-regular-text sticky top-0 z-10">
      <div className="navbar-start px-4">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-primary lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/iniciatives">Propuestas</Link>
            </li>
            <li>
              <Link to="/legislators">Registrar Idea</Link>
            </li>
          </ul>
        </div>
        <Link className="font-semibold text-2xl text-primary-content" to="/">
          Not Defined
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-2.5">
          <li className="text-primary-content">
            <Link to="/iniciatives">Propuestas</Link>
          </li>
          <li className="text-primary-content">
            <Link to="/legislators">Registrar mi idea</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end px-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <img
              src={userPhoto}
              alt="Perfil"
              className="w-10 h-10 rounded-full border border-gray-200"
            />
            <button onClick={toggleLogin} className="btn btn-sm btn-secondary">
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/register" className="btn btn-sm btn-secondary">
              Registrarme
            </Link>
            <Link to="/login" className="btn btn-sm btn-success">
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
