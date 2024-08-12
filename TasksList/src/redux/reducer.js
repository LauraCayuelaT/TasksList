





const initialState = {
    tasks: []
  };
  
const taskReducer = (state = initialState, action) => {
    switch (action.type) {

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
          tasks: state.tasks.filter(task => task.id !== action.payload.id),
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


  // const taskReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case 'ADD_TASK':
  //       return {
  //         ...state,
  //         tasks: [...state.tasks, { ...action.payload, completed: false }],
  //       };
  //     case 'EDIT_TASK':
  //       return {
  //         ...state,
  //         tasks: state.tasks.map(task =>
  //           task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
  //         ),
  //       };
  //     case 'REMOVE_TASK':
  //       return {
  //         ...state,
  //         tasks: state.tasks.filter(task => task.id !== action.payload.id),
  //       };
  //     case 'TOGGLE_TASK_COMPLETION':
  //       return {
  //         ...state,
  //         tasks: state.tasks.map(task =>
  //           task.id === action.payload.id ? { ...task, completed: !task.completed } : task
  //         ),
  //       };
  //     default:
  //       return state;
  //   }
  // };