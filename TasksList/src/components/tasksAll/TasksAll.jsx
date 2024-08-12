import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allTasks, removeTask, toggleTaskCompletion } from "../../redux/actions";
import DeleteIcon from '@mui/icons-material/Delete';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TasksAll = ()=>{
    const navigate = useNavigate();
    const currentTasks = useSelector(state => state.tasks) || [];
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allTasks())
    },[dispatch])
   

    const handleEdit = (id)=>{
        navigate(`/${id}`)
    }   

    const handleDelete = (id)=>{
        dispatch(removeTask(id))
    }

    const handleToggleCompletion = (id, currentStatus) => {
      dispatch(toggleTaskCompletion(id, !currentStatus));
  };
    

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tarea</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Completado</TableCell>
              <TableCell align="right">Editar</TableCell>
              <TableCell align="right">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTasks?.map((row) => {
                return (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.task}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right"> 
                <Checkbox checked={row.completed} 
                          {...label}
                          onChange={() => handleToggleCompletion(row.id, row.complited)} />
                </TableCell>
                <TableCell align="right">
                <EditIcon onClick={()=>handleEdit(row.id)} style={{cursor:'pointer'}}/>
                </TableCell>
                <TableCell align="right">
                <DeleteIcon onClick={()=>handleDelete(row.id)} style={{cursor:'pointer'}}/>
                </TableCell>
              </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )

    
}


export default TasksAll;