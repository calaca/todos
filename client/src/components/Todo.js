import React from 'react';
import Text from './Text';
import Button from './Button';

const Todo = ({ title }) => {
  return (
    <li class="todo-item">
      <Text>{title}</Text>
      <Button>Deletar</Button>
    </li>
  );
};

export default Todo;
