import { useEffect } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './components/login/Login';
import TaskList from './components/taskList/TaskList';
import Register from './components/register/Register';
import { auth } from './firebase';
import TaskInput from './components/newTask/TaskInput';
import EditTask from './components/editTask/EditTask';

function App() {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  

  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {user && <Route path="/home" element={<TaskList/>}/> }
      {user && <Route path="/newTask" element={<TaskInput/>}/>}
      {user && <Route path="/:id" element={<EditTask/>}/>}
      
    </Routes>
  )
}

export default App
