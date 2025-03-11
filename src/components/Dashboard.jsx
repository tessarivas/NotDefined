export const Dashboard = () => {
  const initiatives = [
    {
      title: "Que reforma el primer párrafo del artículo 18-A de la Ley Federal de Derechos.",
      state: "Activa",
      period: "1er Periodo\nSept24-Dic24",
      date: "18/09/2024",
      color: "btn-success",
    },
    {
      title: "Que reforma, adiciona y deroga diversas disposiciones de la Ley Federal de Armas de Fuego y Explosivos.",
      state: "Dictaminada",
      period: "1er Periodo Com.\nDic24-Feb25",
      date: "10/12/2024",
      color: "btn-info",
    },
    {
      title: "Que reforma, adiciona y deroga diversas disposiciones de la Ley del Impuesto Especial sobre Producción y Servicios, a fin de cambiar el ...",
      state: "Desecha",
      period: "1er Periodo\nSept24-Dic24",
      date: "27/09/2024",
      color: "btn-warning",
    },
    {
      title: "Que reforma y adiciona diversas disposiciones de la Ley Federal del Trabajo, en materia del derecho al descanso de las personas trabaja ...",
      state: "Retirada",
      period: "2do Periodo\nFeb25-Abr25",
      date: "12/02/2025",
      color: "btn-error",
    },
    {
      title: "Que reforma los artículos 154 y 162 de la Ley del Seguro Social, para reducir de 750 a 500 las semanas de cotización a las personas adul...",
      state: "Activa",
      period: "1er Periodo\nSept24-Dic24",
      date: "03/10/2024",
      color: "btn-success",
    },
  ];

  return (
    <div className="p-6 mt-10 max-w-6xl mx-auto">
      <h2 className="text-2xl lg:text-4xl font-title-text text-center text-neutral mb-10">
        Últimas Iniciativas y Dictámenes
      </h2>
      <div className="mt-4 border rounded-lg overflow-hidden shadow-md font-regular-text">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-secondary text-white text-0xl lg:text-2xl">
                <th>Iniciativas</th>
                <th>Estado</th>
                <th>Periodo</th>
                <th>Fecha</th>
                <th>Dictámenes</th>
              </tr>
            </thead>
            <tbody>
              {initiatives.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>
                    <button className={`btn ${item.color}`}>{item.state}</button>
                  </td>
                  <td className="whitespace-pre-line">{item.period}</td>
                  <td>{item.date}</td>
                  {index === 0 && (
                    <td
                      rowSpan={initiatives.length}
                      className="text-center align-middle"
                    >
                      <div className="bg-primary text-white text-4xl font-bold rounded-lg w-28 h-28 flex items-center justify-center mx-auto">
                        15
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};