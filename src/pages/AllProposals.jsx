import { useState } from "react";
import { Dashboard } from "../components/Dashboard";
import allInitiatives from "../assets/initiatives.js";

export const AllProposals = () => {
  const [limit, setLimit] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLegislature, setSelectedLegislature] = useState("all");

  const getLegislature = (date) => {
    const year = new Date(date).getFullYear();
    return `${year}-${year + 3}`;
  };

  const availableLegislatures = [
    ...new Set(allInitiatives.map((item) => getLegislature(item.date))),
  ]
    .sort()
    .reverse();
  const filteredInitiatives = allInitiatives.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredInitiatives.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const paginatedInitiatives = filteredInitiatives.slice(
    startIndex,
    startIndex + limit
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="align-middle text-center text-2xl lg:text-4xl font-title-text font-bold text-secondary  mt-6 mb-4">
        Todas las propuestas
      </h1>
      <div className="ml-19 mr-19 flex mt-7 justify-between items-center gap-4 max-w-6xl mx-auto bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-1 items-center gap-4">
          <input
            type="text"
            placeholder="Buscar en todas las iniciativas..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedLegislature}
            onChange={(e) => {
              setSelectedLegislature(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          >
            <option value="all">Todas las legislaturas</option>
            {availableLegislatures.map((legislature) => (
              <option key={legislature} value={legislature}>
                Legislatura {legislature}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600 whitespace-nowrap">
            Mostrando {Math.min(limit, filteredInitiatives.length)} de{" "}
            {filteredInitiatives.length} iniciativas
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Mostrar:</span>
            {[5, 10, 15, 20].map((num) => (
              <button
                key={num}
                onClick={() => {
                  setLimit(num);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 text-sm rounded-lg ${
                  limit === num
                    ? "bg-primary text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <Dashboard initiatives={paginatedInitiatives} />

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4 mb-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === page
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Siguiente
        </button>
        <div className="ml-77 text-sm text-gray-600 whitespace-nowrap">
          Total: {filteredInitiatives.length} iniciativas
        </div>
      </div>
    </div>
  );
};

export default AllProposals;
