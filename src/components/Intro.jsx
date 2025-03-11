import { FaVoteYea, FaFileAlt, FaHandshake } from 'react-icons/fa';
import BannerPicture from '../assets/Images/BannerPicture.jpg';

export const Intro = () => {
  return (
    <>
      <div className="hero min-h-[50vh] lg:min-h-[40vh]">
        <div className="hero-content text-center">
          <div className="max-w-7xl mx-auto font-title-text">
            <img
              src={BannerPicture}
              alt="Banner"
              className="w-full max-w-7xl mx-auto rounded-lg shadow-2xl mb-8"
            />

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-15 text-secondary font-accent-text text-1xl lg:text-2xl">
              <span className="flex items-center gap-2">
                <FaVoteYea className="text-primary" />
                Consulta las votaciones
              </span>
              <span className="flex items-center gap-2">
                <FaFileAlt className="text-primary" />
                Verifica documentos oficiales
              </span>
              <span className="flex items-center gap-2">
                <FaHandshake className="text-primary" />
                Súmate a la transparencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};