import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase"; 
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import style from "./Register.module.css"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario Correctammente Registrado");
      navigate("/login")
    } catch (err) {
      setError(err.message);    
    }
  };

  return (
    <div className={style.container}>
      <h3>Registro</h3>
      <form onSubmit={handleRegister} className={style.form}>
      <TextField id="email-input" label="correo" variant="outlined" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <TextField id="password-input" label="contraseña" variant="outlined" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <Button variant="outlined" type="submit">Registrar</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;