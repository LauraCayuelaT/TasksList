import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase";



export const allTasks = ()=> {
  return async function (dispatch){
    dispatch({type:"GET_ALL_TASKS"})
  }
}


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
      payload: { id }
    });
  } catch (error) {
    console.error("Error al eliminar la tarea en Firebase: ", error);
  }
};

export const toggleTaskCompletion = (id, completed) => async (dispatch) => {
  try {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, { completed });
    dispatch({
      type: 'TOGGLE_TASK_COMPLETION',
      payload: { id }
    });
  } catch (error) {
    console.error("Error al marcar como completada la tarea en Firebase: ", error);
  }
};



// export const addTask = (task) => async (dispatch) => {
//     if (!auth.currentUser) {
//         console.error("El usuario no está autenticado");
//         return;
//     }
//   try {
//     const docRef = await addDoc(collection(db, "tasks"), task);
//     dispatch({
//       type: 'ADD_TASK',
//       payload: { ...task, id: docRef.id }
//     });
//   } catch (error) {
//     console.error("Error al agregar la tarea en Firebase: ", error);
//   }
// };

// export const editTask = (id, updatedTask) => async (dispatch) => {
//   try {
//     const taskRef = doc(db, "tasks", id);
//     await updateDoc(taskRef, updatedTask);
//     dispatch({
//       type: 'EDIT_TASK',
//       payload: { id, updatedTask }
//     });
//   } catch (error) {
//     console.error("Error al editar la tarea en Firebase: ", error);
//   }
// };

// export const removeTask = (id) => async (dispatch) => {
//   try {
//     const taskRef = doc(db, "tasks", id);
//     await deleteDoc(taskRef);
//     dispatch({
//       type: 'REMOVE_TASK',
//       payload: { id }
//     });
//   } catch (error) {
//     console.error("Error al eliminar la tarea en Firebase: ", error);
//   }
// };

// export const toggleTaskCompletion = (id, completed) => async (dispatch) => {
//   try {
//     const taskRef = doc(db, "tasks", id);
//     await updateDoc(taskRef, { completed });
//     dispatch({
//       type: 'TOGGLE_TASK_COMPLETION',
//       payload: { id }
//     });
//   } catch (error) {
//     console.error("Error al marcar como completada la tarea en Firebase: ", error);
//   }
// };
