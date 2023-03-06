const initialStaate = [{
    id: 1,
    todo: 'Reolectar la piedra del mal',
    done: false
}];

const todoReducer = (state = initialStaate, action = {}) => {
    if (action.type = '[TODO] add todo') {
        return [...state, action.payload]
    }
    return state;
}
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Reolectar la piedra de la vida',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}
todos = todoReducer(todos, addTodoAction);

console.log(todos)
