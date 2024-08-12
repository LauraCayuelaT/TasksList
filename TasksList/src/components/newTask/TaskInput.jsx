import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import style from "./TaskInput.module.css"
import { TextField } from "@mui/material";

const TaskInput = ()=>{
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ id: Date.now(), task, description }));
        setTask("");
        setDescription("");
        alert("Tarea correctamente creada")
      };
    const handleClick =()=>{
        navigate("/home")
    }
  
    return (
      <div className={style.contenedor}>
      <button onClick={handleClick}>Home</button>
      <form onSubmit={handleSubmit} className={style.formulario} >
        <div className={style.info}>
          <label>Tarea</label>
          <TextField id="fibasiclled-" label="Nombre de la tarea" variant="outlined" 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Nombre de la tarea"
          />
        </div>
        <div className={style.info}>
          <label>Descripción</label>
          <TextField
          id="outlined-multiline-static"
          label="Descripción de la tarea"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea"
          />
        </div>
        <button type="submit">Agregar Tarea</button>
        
      </form>
      </div> 
    );
  };


export default TaskInput;