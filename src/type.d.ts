interface Todo {
    _id: string;
    name: string;
    description: string;
    status: boolean;
    createAt?: string;
    updateAt?: string;
}

interface TodoProps {
    todo: Todo
}

type ApiDataType = {
    message: string;
    status: string;
    todos: Todo[];
    todo: Todo
}

type TodoState = {
    todos: Todo[],
}

interface Action {
    type: 'SET_TODOS'|'ADD_TODO'|'DELETE_TODO' |'UPDATE_TODO'
    payload?: any;
}


interface TodoStore {
    todoReducer: [TodoState , React.Dispatch<any>]
}
