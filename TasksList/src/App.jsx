
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './components/login/Login';
import TaskList from './components/taskList/TaskList';
import Register from './components/register/Register';
import { auth } from './firebase';
import TaskInput from './components/newTask/TaskInput';
import EditTask from './components/editTask/EditTask';

function App() {

  
  const [user] = useAuthState(auth);

  

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {user && <Route path="/home" element={<TaskList/>}/> }
      {user && <Route path="/newTask" element={<TaskInput/>}/>}
      {user && <Route path="/:id" element={<EditTask/>}/>}
      
    </Routes>
  )
}

export default App
