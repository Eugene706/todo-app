const initialState = {
  tasks: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default tasks;
