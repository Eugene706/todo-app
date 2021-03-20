const initialState = {
  lists: {},
  activeListNum: null,
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LISTS':
      return {
        ...state,
        lists: action.payload,
      };
    case 'SET_ACTIVE_LISTS':
      return {
        ...state,
        activeListNum: action.payload,
      };
    default:
      return state;
  }
};

export default lists;
