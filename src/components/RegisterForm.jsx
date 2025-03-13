import { useState } from "react";

export const RegisterForm = () => {
  const [isValid, setIsValid] = useState(true);

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

  return (
    // REGISTRAR USUARIO
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend className="fieldset-legend">Registrar nuevo usuario</legend>
      
      {/* VALIDAR NOMBRE */}
      <label className="fieldset-label">Nombre Completo</label>
      <input
        type="text"
        className="input validator"
        required
        placeholder="Nombre Completo"
        pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$"
        minLength="10"
        maxLength="40"
        title="Solo introduce tu nombre completo"
        onChange={validarNombre}
      />
      {!isValid && (
        <p className="validator-hint">
          Debe de tener más de 10 caracteres
          <br /> Solo debe contener letras y espacios
        </p>
      )}
        {/* VALIDAR CORREO */}
      <label className="fieldset-label">Email</label>
      <input className="input validator" type="email" required placeholder="mail@site.com" 
      onChange={validarCorreo}/>
        {!isValid && (
        <p className="validator-hint">
          Debe tener un formato de correo valido
        </p>
      )}
        {/* VALIDAR CONTRASEÑA */}
      <label className="fieldset-label">Contraseña</label>
      <input type="password" className="input validator" required placeholder="Contraseña" minlength="8" 
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
      title="Debe tener más de 8 caracteres, incluyendo numeros, letras minusculas y mayusculas"
      onChange={validarContrasena} />
      {!isValid && (
        <p className="validator-hint">
          Debe tener más de 8 caracteres, incluyendo:
          <br /> Minimo un número
          <br /> Minimo una letra minuscula
          <br /> Minimo una letra mayuscula
        </p>
      )}
      <button className="btn btn-neutral mt-4">Registrarme</button>
    </fieldset>
  );
};
