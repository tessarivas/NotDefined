import { useState } from "react";
import { Link } from "react-router-dom";
import BannerPicture from "../assets/Images/BannerPicture.jpg";

export const Hero = () => {
  const height = "500px";
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative w-full" style={{ height }}>
      <img
        src={BannerPicture}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover brightness-30"
      />

      <div className="relative flex flex-col items-center justify-center h-full text-center text-neutral-content">
        <h1 className="mb-5 text-7xl font-bold drop-shadow-lg font-title-text">
          Transparencia y Conexión Legislativa
        </h1>
        <p className="mb-5 text-2xl drop-shadow-lg font-regular-text">
          Acercando al congreso y la ciudadania.
        </p>
        <Link
          to={isLoggedIn ? "/registerIdeas" : "/register"}
          className="btn btn-primary px-6 py-3 text-lg font-semibold"
        >
          {isLoggedIn ? "¡Registra tu idea!" : "Regístrate ahora"}
        </Link>
      </div>
    </div>
  );
};
