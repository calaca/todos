import { action, thunk } from 'easy-peasy';

const api = 'http://localhost:5000';

export default {
  // state
  todos: [],
  // thunks
  fetchTodos: thunk(async actions => {
    const res = await fetch(`${api}/api/todos`);
    const todos = await res.json();
    actions.setTodos(todos);
  }),
  saveTodo: thunk(async (actions, newTodo) => {
    const res = await fetch(`${api}/api/todos/add`, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: { 'Content-type': 'application/json' }
    });
    const todo = await res.json();
    actions.add(todo);
  }),
  // actions
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter(todo => todo._id !== id);
  }),
  add: action((state, todo) => {
    state.todos = [...state.todos, todo];
  })
};
