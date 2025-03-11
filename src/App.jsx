import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content">
        <h1 className="text-4xl font-bold text-primary">Color Primario</h1>
        <p className="text-secondary">Este es el color secundario</p>
        <button className="px-4 py-2 mt-4 bg-accent text-accent-content rounded-[var(--radius-box)] border-[var(--border)]">
          Botón con color de acento
        </button>
        <div className="mt-4 p-4 bg-error text-error-content rounded-[var(--radius-field)]">
          Mensaje de error
        </div>
        <div className="mt-4 p-4 bg-success text-success-content rounded-[var(--radius-box)]">
          Mensaje de éxito
        </div>
      </div>
    </>
  );
}

export default App;
