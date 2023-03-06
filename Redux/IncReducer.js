const initialState = 0;
const incrementCounter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    case 'CHANGETEXT':
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export default incrementCounter;
