import { FaVoteYea, FaFileAlt, FaHandshake, FaLightbulb, FaUsers, FaGavel, FaBalanceScale, FaFlag } from "react-icons/fa";

export const Intro = () => {
  return (
    <div className="hero min-h-[50vh] lg:min-h-[40vh] flex flex-col justify-center items-center gap-8 pt-5">
      {/* Íconos informativos */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 text-secondary font-accent-text text-lg lg:text-xl">
        <span className="flex items-center gap-3">
          <FaVoteYea className="text-primary text-3xl" />
          Consulta las votaciones
        </span>
        <span className="flex items-center gap-3">
          <FaFileAlt className="text-primary text-3xl" />
          Verifica documentos oficiales
        </span>
        <span className="flex items-center gap-3">
          <FaHandshake className="text-primary text-3xl" />
          Súmate a la transparencia
        </span>
      </div>

      {/* Título */}
      <h2 className="text-5xl text-center text-neutral font-title-text pt-7">
        Etapas del Proceso Legislativo
      </h2>

      <div className="w-full max-w-4xl flex flex-col items-center font-regular-text font-bold">
        <div className="w-full flex justify-between items-center relative py-4">
          <div className="absolute w-full border-t-4 border-dashed border-gray-300 top-1/2 left-0 -translate-y-1/2"></div>
          <div className="relative flex flex-col items-center gap-2">
            <FaLightbulb className="text-error text-4xl" />
            <span className="text-lg font-bold text-error">Idea</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <FaUsers className="text-warning text-4xl" />
            <span className="text-lg font-bold text-warning">Mesa Directiva</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <FaBalanceScale className="text-success text-4xl" />
            <span className="text-lg font-bold text-success">Comisión</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <FaGavel className="text-primary text-4xl" />
            <span className="text-lg font-bold text-primary">Jurídico</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <FaUsers className="text-info text-4xl" />
            <span className="text-lg font-bold text-info">Comisión</span>
          </div>
          <div className="relative flex flex-col items-center gap-2">
            <FaFlag className="text-neutral text-4xl" />
            <span className="text-lg font-bold text-neutral">Pleno</span>
          </div>
        </div>
      </div>
    </div>
  );
};
