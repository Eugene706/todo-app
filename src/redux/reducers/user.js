const initialState = {
  user: {},
  isLoad: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoad: true,
      };
    case 'SET_LOAD_USER':
      return {
        ...state,
        isLoad: action.payload,
      };
    default:
      return state;
  }
};

export default user;
