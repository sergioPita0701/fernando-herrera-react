import { useReducer } from "react";


export const useTodo = () => {
    const initialStaate = [
        // {
        //   id: new Date().getTime(),
        //   descripcion: "Reolectar la piedra del alma",
        //   done: false,
        // },
    ];
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    };


    const [todos, dispatch] = useReducer(todoReducer, initialStaate, init);
    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo,
        };

        dispatch(action);
    };
    const handleDeleteTodo = () => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    };
    const handleToggleTodo = () => {
        dispatch({
            type: "[TODO] Toogle Todo",
            payload: id,
        });
    };

    const todosCount = () => {
        return todos.length;
    }

    const pendingTodosCount = () => {
        return todos.filter(todo => !todo.done).length;
    }

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos,

        todosCount,
//        todosCount:todos.length;,

        pendingTodosCount
    };
};
