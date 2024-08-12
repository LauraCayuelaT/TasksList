
const initialState = {
    selectedTask: {},
    tasks:  [],
    currentTasks: []
   
  };
  
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_TASKS':
        return {...state, tasks: action.payload, currentTasks:action.payload};
      case 'GET_TASK':
        {
        return {...state, selectedTask:action.payload} }

      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { ...action.payload, completed: false }],
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
          ),
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.currentTasks.filter(task => task.id !== action.payload.id),
        };
      case 'TOGGLE_TASK_COMPLETION':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };


  export default taskReducer;
