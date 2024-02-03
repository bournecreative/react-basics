export const exampleCode = `
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case "status":
      return {
        todos: state.todos.map((item) => {
          if (item.text === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
}
`;
