const initialState = {
    user: "null",
  };



  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Signup':
        return {
          ...state,
          user: action.payload,
        };
      case 'Logout':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;