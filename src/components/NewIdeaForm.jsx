export const NewIdeaForm = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-200">
        <fieldset className="w-full max-w-3xl bg-base-100 shadow-lg rounded-box p-6 space-y-4 border border-base-300">
          <legend className="text-center text-2xl lg:text-4xl font-title-text font-bold text-secondary mt-6 mb-4 p-5">Registrar Idea</legend>
  
          {/* Título de la propuesta */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Descripción:</label>
            <input
              type="text"
              className="input input-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Título"
            />
          </div>
  
          {/* Justificación */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Justificación:</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Explicación detallada..."
            ></textarea>
          </div>
  
          {/* Objetivos */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Objetivo(s):</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Describe los objetivos..."
            ></textarea>
          </div>
  
          {/* Propuesta de modificación */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Propuesta de modificación o creación de leyes:</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Detalles de las modificaciones..."
            ></textarea>
          </div>
  
          {/* Impactos esperados */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Impactos o efectos esperados:</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Describe los impactos esperados..."
            ></textarea>
          </div>
  
          {/* Mecanismos de implementación */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Mecanismos de implementación:</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Explica cómo se implementará..."
            ></textarea>
          </div>
  
          {/* Plazo de implementación */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Plazo de implementación:</label>
            <input
              type="text"
              className="input input-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Tiempo estimado..."
            />
          </div>
  
          {/* Evaluación de la propuesta */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Evaluación de la Propuesta:</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Métodos de evaluación..."
            ></textarea>
          </div>
  
          {/* Firmas de apoyo */}
          <div className="space-y-1">
            <legend className="text-sm text-secondary">Firmas de apoyo (Si corresponde):</legend>
            <input type="file" className="file-input file-input-bordered w-full bg-base-100 border border-base-300 text-sm" />
            <label className="text-xs text-base-content">Tamaño máximo 2MB</label>
          </div>
  
          {/* Documentación adicional */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Documentación adicional</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Información complementaria..."
            ></textarea>
          </div>
  
          {/* Conclusión */}
          <div className="space-y-1">
            <label className="block text-sm text-base-content">Conclusión:</label>
            <textarea
              className="textarea textarea-bordered w-full bg-base-100 border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none text-sm"
              placeholder="Resumen final..."
            ></textarea>
          </div>
  
          {/* Subir archivo */}
          <div className="space-y-1">
            <legend className="text-sm text-secondary">Sube el archivo de tu propuesta:</legend>
            <input type="file" className="file-input file-input-bordered w-full bg-base-100 border border-base-300 text-sm" />
            <label className="text-xs text-base-content">Tamaño máximo 2MB</label>
          </div>
  
          {/* Botón de registro */}
          <div>
            <button className="btn btn-primary w-full text-sm">Registrar Idea</button>
          </div>
        </fieldset>
      </div>
    );
  };
  