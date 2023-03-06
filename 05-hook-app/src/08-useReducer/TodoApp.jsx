import { useEffect, useReducer } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";


export const TodoApp = () => {

  const { todos, todosCount,pendingTodosCount,handleNewTodo ,handleDeleteTodo,handleToggleTodo} = useTodo();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 
  return (
    <>
      <h1>
        TodoApp :({todos.length}), <small>pendientes :{todos.filter(todo=>!todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
