import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTask, getTask } from "../../redux/actions";
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";

const EditTask = ()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const task = useSelector(state=>state.selectedTask);
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        task: '',
        description: '',
        completed: false,
    });

    useEffect(()=>{
        dispatch(getTask(id))
    },[id, dispatch])

    useEffect(() => {
        if (task) {
            setTaskData({
                task: task.task || '',
                description: task.description || '',
                completed: task.completed || false,
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTaskData({
            ...taskData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTask(id, taskData));
        navigate('/home'); 
    };

    return(
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Edit Task
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="task"
                        label="Tarea"
                        name="task"
                        value={taskData.task}
                        onChange={handleChange}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Descripción"
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                name="completed"
                                checked={taskData.completed}
                                onChange={handleChange}
                            />
                        }
                        label="Completado"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Container>
    )


}

export default EditTask;