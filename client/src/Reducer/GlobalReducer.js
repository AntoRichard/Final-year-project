export const globalReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case 'SET_MARK':
      console.log('into highs');
      return {
        marks: action.payload
      };
    default:
      return state;
  }
};
