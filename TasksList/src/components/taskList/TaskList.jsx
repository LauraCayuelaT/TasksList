import { signOut } from "firebase/auth";
import { auth } from "./../../firebase";  
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import style from './TaskList.module.css'
import TasksAll from "../tasksAll/TasksAll";



const TaskList = ()=>{
    const navigate = useNavigate()
    



    const handleLogout = async () => {
        try {
          await signOut(auth);
          console.log("Usuario deslogueado");
        } catch (error) {
          console.error("Error al desloguearse: ", error);
        }
      };
    const handleClick =()=>{
        navigate("/newTask")
    }
    
    return(
        <div className={style.contenedor} >
        <div className={style.logOut}> 
        <Button variant='outlined' onClick={handleLogout}>Cerrar sesión</Button>
        </div>
        <div className={style.contenidoTaks}> 
        <Button variant='outlined'  onClick={handleClick}>Nueva Tarea</Button>
        <div>
        <TasksAll />
        </div>
        </div>
        </div>
    )
}

export default TaskList;