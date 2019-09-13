import React from 'react';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import Warning from './components/Warning';
import TodosList from './components/TodosList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title as="h1">TODOS</Title>
      </header>
      <main>
        <Input
          name="title"
          type="text"
          placeholder="Título do todo"
          // value={title}
          // onChange={e => setName(e.target.value)}
        />
        <Button>Adicionar</Button>
        <Warning>Clique em um item para marcá-lo como completo</Warning>
        <TodosList />
      </main>
    </div>
  );
}

export default App;
