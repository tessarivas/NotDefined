import { useState } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const validarNombre = (e) => {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
    const valor = e.target.value;
    setIsValid(valor.length >= 10 && regex.test(valor));
  };

  const validarCorreo = (e) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const valor = e.target.value;
    setIsValid(regex.test(valor));  
  };

  const validarContrasena = (e) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const valor = e.target.value;
    setIsValid(valor.length >= 8 && regex.test(valor));
  };

  const manejarRegistro = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form className="w-full max-w-md bg-white shadow-md rounded-lg p-8" onSubmit={manejarRegistro}>
        <h2 className="text-2xl font-bold mb-6 text-center">Registrar nuevo usuario</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo</label>
          <input
            type="text"
            className="input input-bordered w-full"
            required
            placeholder="Nombre Completo"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$"
            minLength="10"
            maxLength="40"
            title="Solo introduce tu nombre completo"
            onChange={validarNombre}
          />
          {!isValid && (
            <p className="text-red-500 text-xs mt-2">
              Debe de tener más de 10 caracteres y solo debe contener letras y espacios
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            required
            placeholder="mail@site.com"
            onChange={validarCorreo}
          />
          {!isValid && (
            <p className="text-red-500 text-xs mt-2">
              Debe tener un formato de correo valido
            </p>
          )}
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
            onChange={validarContrasena}
          />
          {!isValid && (
            <p className="text-red-500 text-xs mt-2">
              Debe tener más de 8 caracteres, incluyendo:
              <br /> Minimo un número
              <br /> Minimo una letra minuscula
              <br /> Minimo una letra mayuscula
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-primary w-full">Registrarme</button>
        </div>
      </form>
    </div>
  );
};
