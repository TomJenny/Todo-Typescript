import axios, { AxiosResponse } from "axios";
import { DOMAIN } from "../utils";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(DOMAIN);
    console.log(todos);
    return todos;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addTodos = async (
  formData: Todo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<Todo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(DOMAIN, todo);
    return saveTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const updateTodos = async (
  todo: Todo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<Todo, "status"> = {
      status: true,
    };
    const updateTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${DOMAIN}/${todo._id}`,
      todoUpdate
    );
    return updateTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTodos = async (
  todo: Todo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deleteTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${DOMAIN}/${todo._id}`
    );
    return deleteTodo;
  } catch (error: any) {
    throw new Error(error);
  }
};
