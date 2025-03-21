export const Metrics = () => {
  const metrics = [
    { value: "+150", description: "Iniciativas registradas" },
    { value: "100%", description: "Transparencia en votaciones" },
    { value: "+500", description: "Documentos accesibles" },
  ];

  return (
    <div className="p-6 mt-10 mb-15 g max-w-6xl mx-auto text-center">
      <h2 className="text-2xl lg:text-4xl font-title-text text-neutral mb-10">
        Impacto y Beneficios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-success font-bold text-4xl lg:text-5xl">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>{metric.value}</span>
            <span className="text-primary font-accent-text text-center text-base lg:text-2xl">
              {metric.description}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-accent font-regular-text text-sm md:text-base max-w-4xl mx-auto">
        La transparencia en las etapas del proceso legislativo es esencial para
        una democracia sólida. Nuestra plataforma te permite seguir el avance de
        las iniciativas desde su llegada al Congreso hasta su votación final en
        el pleno. Usamos tecnología blockchain para garantizar que cada paso del
        proceso sea seguro, accesible e íntegro. Conoce cómo estamos
        transformando la forma en que las iniciativas progresan a través de cada
        etapa del Congreso.
      </p>
    </div>
  );
};
