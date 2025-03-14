import { FaFilePdf } from "react-icons/fa";
import {
  FaLightbulb,
  FaUsers,
  FaBalanceScale,
  FaGavel,
  FaFlag,
} from "react-icons/fa";

export default function SelectedProposal() {
  const selectedInitiative = {
    description:
      "Por el que se reforma el artículo 7 de la Ley de Fomento a la Competitividad y Desarrollo Económico para el Estado de Baja California	",
    type: "Iniciativa de Reforma",
    presented_by: "Sandra Alejandrina Corral Quintero",
    group: "PAN",
    date: "2025/03/10",
    stage: "Jurídico", // Etapa actual
    pdf_link:
      "https://www.congresobc.gob.mx/Documentos/ProcesoParlamentario/Iniciativas/20250313_INICIATIVA%2019DIP.%20VALLE%20ART.%2027%20LEY%20DISCRIMINACION.PDF", // Enlace al PDF
  };

  const stages = [
    {
      name: "Idea",
      color: "text-error",
      icon: <FaLightbulb className="text-5xl" />, // Íconos más grandes
    },
    {
      name: "Mesa Directiva",
      color: "text-warning",
      icon: <FaUsers className="text-5xl" />, // Íconos más grandes
    },
    {
      name: "Comisión Previa",
      color: "text-success",
      icon: <FaBalanceScale className="text-5xl" />, // Íconos más grandes
    },
    {
      name: "Jurídico",
      color: "text-primary",
      icon: <FaGavel className="text-5xl" />, // Íconos más grandes
    },
    {
      name: "Comisión",
      color: "text-info",
      icon: <FaBalanceScale className="text-5xl" />, // Íconos más grandes
    },
    {
      name: "Pleno",
      color: "text-neutral",
      icon: <FaFlag className="text-5xl" />, // Íconos más grandes
    },
  ];

  const currentStageIndex = stages.findIndex(
    (stage) => stage.name === selectedInitiative.stage
  );
  const currentStageColor = stages[currentStageIndex].color; // Color de la etapa actual

  // Definir el color de la barra de progreso según la etapa
  let progressColor = "bg-gray-300"; // Color por defecto
  if (selectedInitiative.stage === "Idea") {
    progressColor = "bg-error"; // Color para "Idea"
  } else if (selectedInitiative.stage === "Mesa Directiva") {
    progressColor = "bg-warning"; // Color para "Mesa Directiva"
  } else if (selectedInitiative.stage === "Comisión Previa") {
    progressColor = "bg-success"; // Color para "Comisión Previa"
  } else if (selectedInitiative.stage === "Jurídico") {
    progressColor = "bg-primary"; // Color para "Jurídico"
  } else if (selectedInitiative.stage === "Comisión") {
    progressColor = "bg-info"; // Color para "Comisión"
  } else if (selectedInitiative.stage === "Pleno") {
    progressColor = "bg-neutral"; // Color para "Pleno"
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="pb-10">
        <h2 className="text-5xl text-center text-primary font-title-text font-bold pt-7">
          Propuesta
        </h2>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl w-full flex flex-col items-center font-regular-text font-bold">
        <h3 className="text-2xl text-center text-accent font-regular-text font-bold pt-7">
          ESTADO DE ETAPA ACTUAL
        </h3>
        <div className="w-full max-w-3xl flex justify-between items-center relative py-4">
          {/* Línea de progreso continua */}
          <div className="absolute w-full h-1 bg-gray-300 top-[42%] left-0 -translate-y-1/2"></div>
          <div
            className={`absolute h-1 ${progressColor} top-[42%] left-0 -translate-y-1/2`}
            style={{
              width: `${(currentStageIndex / (stages.length - 1)) * 100}%`,
            }}
          ></div>

          {/* Iterar a través de las etapas */}
          {stages.map((stage, index) => (
            <div
              key={stage.name}
              className="relative flex flex-col items-center gap-2"
            >
              <div
                className={`flex flex-col items-center gap-2 ${
                  index <= currentStageIndex
                    ? currentStageColor
                    : "text-gray-300"
                }`}
              >
                {stage.icon}
                <span
                  className={`text-sm font-bold ${
                    index <= currentStageIndex
                      ? currentStageColor
                      : "text-gray-300"
                  }`}
                >
                  {stage.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vista previa de la propuesta */}
      <div className="p-6 w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 mt-10 mb-15">
        <div className="space-y-4 ">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-neutral">Descripción:</h2>
            <p className="text-gray-600">{selectedInitiative.description}</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold text-neutral">Tipo:</h2>
            <p className="text-gray-600">{selectedInitiative.type}</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold text-neutral">
              Presentado por:
            </h2>
            <p className="text-gray-600">{selectedInitiative.presented_by}</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold text-neutral">Grupo:</h2>
            <p className="text-gray-600">{selectedInitiative.group}</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold text-neutral">Fecha:</h2>
            <p className="text-gray-600">{selectedInitiative.date}</p>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold text-neutral">Etapa:</h2>
            <p className="text-gray-600">{selectedInitiative.stage}</p>
          </div>
        </div>

        {/* Botón de descarga */}
        <div className="mt-6 flex justify-center items-center">
          <a
            href={selectedInitiative.pdf_link}
            className="btn btn-error flex items-center gap-2 text-white text-lg py-6 px-6"
          >
            <FaFilePdf className="text-2xl" />
            Descargar PDF
          </a>
        </div>
      </div>
    </div>
  );
}
