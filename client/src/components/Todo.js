import React from 'react';
import Text from './Text';
import Button from './Button';

const Todo = ({ title, completed }) => {
  return (
    <li
      className="todo-item"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <Text>{title}</Text>
      <Button>Deletar</Button>
    </li>
  );
};

export default Todo;
