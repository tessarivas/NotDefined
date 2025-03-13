import allInitiatives from "../assets/initiatives.js";
import { Link } from "react-router-dom";

export const Dashboard = ({ limit, initiatives = allInitiatives }) => {
  const displayedInitiatives = limit
    ? initiatives.slice(0, limit)
    : initiatives;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className=" border rounded-lg overflow-hidden shadow-md font-regular-text">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-secondary text-white text-sm lg:text-base">
                <th className="w-2/5 px-4 py-2 text-center">Descripción</th>
                <th className="w-1/8 px-4 py-2 text-center">Tipo</th>
                <th className="w-1/6 px-4 py-2 text-center">Presentado por</th>
                <th className="w-1/8 px-4 py-2 text-center">Grupo</th>
                <th className="w-1/8 px-4 py-2 text-center">Fecha</th>
                <th className="w-1/8 px-4 py-2 text-center">Estado</th>
                <th className="w-1/8 px-4 py-2 text-center">Etapa</th>
              </tr>
            </thead>
            <tbody>
              {displayedInitiatives.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{item.description}</td>
                  <td className="px-4 py-3 text-center">{item.type}</td>
                  <td className="px-4 py-3 text-center">{item.presented_by}</td>
                  <td className="px-4 py-3 text-center">{item.group}</td>
                  <td className="px-4 py-3 text-center">{item.date}</td>
                  <td className="px-4 py-3 text-center">{item.estado}</td>
                  <td className="px-4 py-3 text-center">
                    <Link to={`/selectedProposal/#`}>
                      <button
                        className={`w-32 py-5 rounded-lg text-sm font-medium btn ${item.color}`}
                      >
                        {item.stage}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
