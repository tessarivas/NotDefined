import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const usuarios = [
    {
      email: "franciscoDiputado@gmail.com",
      contrasena: "Dfran2025L-"
    },
    {
      email: "laura@gmail.com",
      contrasena: "Laura2025C-"
    },
    {
      email: "adminUsuario@gmail.com",
      contrasena: "AdminC-2025"
    }
  ];

  const manejarLogin = (e) => {
    e.preventDefault();
    const usuarioValido = usuarios.find(
      (user) => user.email === email && user.contrasena === password
    );

    if (usuarioValido) {
      navigate("/");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form className="w-full max-w-md bg-white shadow-md rounded-lg p-8" onSubmit={manejarLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            required
            placeholder="jose@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
          <input
            type="password"
            className="input input-bordered w-full"
            required
            placeholder="Contraseña"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe tener más de 8 caracteres, incluyendo numeros, letras minusculas y mayusculas"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-red-500 text-xs mt-2">{error}</p>
        )}

        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-primary w-full">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};
