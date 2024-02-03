export const exampleCode = `
/* the userReducer hooks consists of a 
* reducer - a function declared outside of the react component - reducer
* initial value - 0
* count - represents current state
* dispatch - function required to invoke reducer function 
*/

  const [count, dispatch] = useReducer(reducer, 0);

/* reducer function - 2 arguments state, action
* convention is to use a switch statement to determine
* how state should be updated
*/

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

/* dispatch is used to update state by invoking reducer function
* convention is to call dispatch with an object argument with at least 
* 1 of 2 properties
* type - corresponds to action.type in the reducer function 
* payload - corresponds to action.payload used to update state
* Example - dispatch({ type: "increment" })
*/ 
`;
