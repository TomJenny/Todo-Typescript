import { Typography } from "antd";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoItem from "./components/TodoItem/TodoItem";
import { storeContext } from "./context/Context";
import {
  addTodos,
  deleteTodos,
  getTodos,
  updateTodos,
} from "./services/TodoServices";

const { Title } = Typography;

const Container = styled.div`
  max-width: 800px;
  padding: 50px 5px 0;
  margin: 0 auto;
`;
const Heading2 = styled(Title)`
  text-align: center;
  color: white !important;
`;
function App() {
  const { todoReducer } = useContext(storeContext);
  const [todosState, dispatch] = todoReducer;
  const fetchTodosAction = () => {
    getTodos()
      .then(({ data }: Todo[] | any) => {
        const action: Action = {
          type: "SET_TODOS",
          payload: data,
        };
        dispatch(action);
      })
      .catch((err: Error) => console.log(err));
  };

  const deleteTodoAction = (item: Todo): void => {
    deleteTodos(item)
      .then(() => {
        fetchTodosAction();
      })
      .catch((err: Error) => console.log(err));
  };

  const addTodoAction = (item: Todo): void => {
    addTodos(item)
      .then(() => {
        fetchTodosAction();
      })
      .catch((err: Error) => console.log(err));
  };

  const updateTodoAction = (item: Todo): void => {
    updateTodos(item)
      .then(() => {
        fetchTodosAction();
      })
      .catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    fetchTodosAction();
  }, []);

  return (
    <Container>
      <Heading2 level={2}>TODO LIST TYPESCRIPT</Heading2>
      <AddTodo addTodoAction={addTodoAction} />
      <TodoItem
        updateTodoAction={updateTodoAction}
        deleteTodoAction={deleteTodoAction}
      />
    </Container>
  );
}

export default App;
