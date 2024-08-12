import { collection, addDoc, updateDoc, doc, deleteDoc, getDocs, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";



export const allTasks = () => {
  return async function (dispatch) {
      
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: "GET_ALL_TASKS", payload: tasks });
      
  };
};


export const getTask = (id) => async (dispatch) => {
  try {
    const taskRef = doc(db, "tasks", id);
    const taskDoc = await getDoc(taskRef);

    if (taskDoc.exists()) {
      dispatch({
        type: 'GET_TASK',
        payload: { id: taskDoc.id, ...taskDoc.data() }
      });
    } else {
      console.log("No se encontró la tarea con ID:", id);
    }
  } catch (error) {
    console.error("Error al obtener la tarea en Firebase: ", error);
  }
};

export const addTask = (task) => async (dispatch) => {
    if (!auth.currentUser) {
        console.error("El usuario no está autenticado");
        return;
    }
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    dispatch({
      type: 'ADD_TASK',
      payload: { ...task, id: docRef.id }
    });
  } catch (error) {
    console.error("Error al agregar la tarea en Firebase: ", error);
  }
};

export const editTask = (id, updatedTask) => async (dispatch) => {
  try {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, updatedTask);
    dispatch({
      type: 'EDIT_TASK',
      payload: { id, updatedTask }
    });
  } catch (error) {
    console.error("Error al editar la tarea en Firebase: ", error);
  }
};

export const removeTask = (id) => async (dispatch) => {
  try {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
  
    dispatch({
      type: 'REMOVE_TASK',
      payload: { id: id }
    });
  } catch (error) {
    console.error("Error al eliminar la tarea en Firebase: ", error);
  }
};

export const toggleTaskCompletion = (id, currentCompleted) => async (dispatch) => {
  try {
    
    const taskRef = doc(db, "tasks", id);
    const updateCompleted = !currentCompleted;
    await updateDoc(taskRef, { completed: updateCompleted });
    dispatch({
      type: 'TOGGLE_TASK_COMPLETION',
      payload: { id }
    });
  } catch (error) {
    console.error("Error al marcar como completada la tarea en Firebase: ", error);
  }
};

