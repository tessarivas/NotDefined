import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Estado para almacenar el email ingresado
  const [password, setPassword] = useState(""); // Estado para almacenar la contraseña ingresada
  const [error, setError] = useState(""); // Estado para mostrar errores

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

const usuarios = [
  {
      email: 
      "franciscoDiputado@gmail.com",
      contrasena: 
      "Dfran2025L-"
  },
  {
      email: 
      "laura@gmail.com",
      contrasena: 
      "Laura2025C-"
  },
  {
      email: 
      "adminUsuario@gmail.com",
      contrasena: 
      "AdminC-2025"
  }
  ];

const manejarLogin = (e) => {
    // Buscar si el usuario existe en la lista
    const usuarioValido = usuarios.find(
        (user) => user.email === email && user.contrasena === password
      );
      
      if (usuarioValido) {
        navigate("/"); // Redirigir si las credenciales son correctas
      } else {
        setError("Correo o contraseña incorrectos"); // Mostrar mensaje de error
      }
  };

  return (
    // INICIAR SESIÓN USUARIO
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend className="fieldset-legend">Iniciar Sesión</legend>
      
        {/* VALIDAR CORREO */}
      <label className="fieldset-label">Email</label>
      <input className="input validator" type="email" required placeholder="jose@gmail.com" 
      onChange={(e) => setEmail(e.target.value)}/>
        {/* VALIDAR CONTRASEÑA */}
      <label className="fieldset-label">Contraseña</label>
      <input type="password" className="input validator" required placeholder="Contraseña" minlength="8" 
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
      title="Debe tener más de 8 caracteres, incluyendo numeros, letras minusculas y mayusculas"
      onChange={(e) => setPassword(e.target.value)}/>

      {/* Mostrar error si las credenciales son incorrectas */}
      {error && <p className="validator-hint text-red-500">{error}
        </p>}
      <button className="btn btn-neutral mt-4" onClick={manejarLogin}>Iniciar Sesión</button>
    </fieldset>
  );
};
