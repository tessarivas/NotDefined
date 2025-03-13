export const Dashboard = () => {
  const initiatives = [
    {
      description:
        "Por el que se reforma la fracción VII del artículo 27 de la Ley para Prevenir y Erradicar la Discriminación en el Estado de Baja California",
      type: "Iniciativa de Reforma",
      presented_by: "Adrian Humberto Valle Ballesteros",
      group: "PRI",
      date: "2025/03/13",
      color: "btn-success",
      stage: "Mesa Directiva",
    },
    {
      description:
        "Por el que se adiciona el artículo 145 BIS al Código Penal para el Estado de Baja California, en materia de protección a adultos mayores",
      type: "Iniciativa de Adición",
      presented_by: "María del Rocío Adame Muñoz",
      group: "MORENA",
      date: "2025/03/12",
      color: "btn-warning",
      stage: "Comisiones",
    },
    {
      description:
        "Por el que se reforman los artículos 4 y 8 de la Ley de Educación del Estado de Baja California, en materia de educación ambiental",
      type: "Iniciativa de reforma",
      presented_by: "Dunnia Montserrat Murillo López",
      group: "MORENA",
      date: "2025/03/11",
      color: "btn-error",
      stage: "Juridico",
    },
    {
      description:
        "Por el que se reforma el artículo 7 de la Ley de Fomento a la Competitividad y Desarrollo Económico para el Estado de Baja California",
      type: "Iniciativa de reforma",
      presented_by: "Santa Alejandrina Corral Quintero",
      group: "PAN",
      date: "2025/03/10",
      color: "btn-warning",
      stage: "Pleno",
    },
    {
      description:
        "Por el que se reforman y adicionan diversas disposiciones de la Ley de Protección al Ambiente para el Estado de Baja California",
      type: "Iniciativa de reforma",
      presented_by: "Julio César Vázquez Castillo",
      group: "PT",
      date: "2025/03/09",
      color: "btn-success",
      stage: "Mesa Directiva",
    }
  ];

  return (
    <div className="p-6 mt-10 max-w-6xl mx-auto">
      <h2 className="text-2xl lg:text-3xl font-title-text text-center text-neutral mb-10">
        Últimas Iniciativas y Dictámenes
      </h2>
      <div className="mt-4 border rounded-lg overflow-hidden shadow-md font-regular-text">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-secondary text-white text-sm lg:text-base">
                <th className="w-2/5 px-4 py-2 text-center">Descripción</th>
                <th className="w-1/8 px-4 py-2 text-center">Tipo</th>
                <th className="w-1/6 px-4 py-2 text-center">Presentado por</th>
                <th className="w-1/8 px-4 py-2 text-center">Grupo</th>
                <th className="w-1/8 px-4 py-2 text-center">Fecha</th>
                <th className="w-1/8 px-4 py-2 text-center">Etapa</th>
              </tr>
            </thead>
            <tbody>
              {initiatives.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{item.description}</td>
                  <td className="px-4 py-3 text-center">{item.type}</td>
                  <td className="px-4 py-3 text-center">{item.presented_by}</td>
                  <td className="px-4 py-3 text-center">{item.group}</td>
                  <td className="px-4 py-3 text-center">{item.date}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      className={`w-32 py-5 rounded-lg text-sm font-medium btn ${item.color}`}
                    >
                      {item.stage}
                    </button>
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
