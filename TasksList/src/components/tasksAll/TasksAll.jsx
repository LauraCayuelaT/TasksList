import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";



const initialTasks = [
    {
      id:1,
      tarea: "Hola",
      descripcion: "decir hola",
      complited: false
    },
    { id:2,
      tarea: "Chao",
      descripcion: "decir chao",
      complited: false
    },
    { id:3,
      tarea: "Leer",
      descripcion: "leer 10 mins",
      complited: true
    },
    { id:4,
      tarea: "Correo",
      descripcion: "Responder 10 correos",
      complited: false
    },
    { id:5,
      tarea: "Compra",
      descripcion: "comprar mercado",
      complited: true
    }
  ]




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TasksAll = ()=>{

    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tarea</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Completado</TableCell>
              <TableCell align="right">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {initialTasks.map((row) => {
               
                return (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.tarea}
                </TableCell>
                <TableCell align="right">{row.descripcion}</TableCell>
                <TableCell align="right">
                <Checkbox checked={row.complited} {...label} />
                </TableCell>
                <TableCell align="right">
                
                </TableCell>
              </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )

    
}


export default TasksAll;