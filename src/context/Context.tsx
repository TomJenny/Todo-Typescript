import React, { useReducer } from "react";

type ContextProps = {
  children: any;
};

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state: typeof initialState = initialState,
  action: Action
) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TODOS": {
      state.todos = payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export const storeContext = React.createContext<TodoStore | null>(null);

const Context = (props: ContextProps) => {
  let [todosState, dispatch] = useReducer(todoReducer, initialState);

  const store: TodoStore = {
    todoReducer: [todosState, dispatch],
  };

  return (
    <storeContext.Provider value={store}>
      {props.children}
    </storeContext.Provider>
  );
};
export default Context;
