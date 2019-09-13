import React from 'react';
import { StoreProvider, createStore } from 'easy-peasy';
import model from './models';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import './App.css';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <header className="App-header">
          <Title as="h1">TODOS</Title>
        </header>
        <main>
          <AddTodo />
          <TodosList />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
