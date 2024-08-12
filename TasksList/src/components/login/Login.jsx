import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Button, TextField } from "@mui/material";
import style from "./Login.module.css"


const Login = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try { 
      await signInWithEmailAndPassword(auth, email, password);
      alert("Usuario logueado");
      navigate("/home")
    } catch (err) {
      setError(err.message);        
    }
  };

    const handleClick = ()=>{
        navigate("/register")
    }
    return (
      <div className={style.divContainer}>
      <h3>Task App</h3>
      <form onSubmit={handleLogin} className={style.container}>
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
        <Button variant="outlined" type="submit">Iniciar sesión</Button>
      </form>
      {error && <p>{error}</p>}
      <Button variant="contained" onClick={handleClick}>Registrarse</Button>
      </div>
    )
}


export default Login;