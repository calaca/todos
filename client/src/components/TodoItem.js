import React from 'react';
import { useStoreActions } from 'easy-peasy';
import Text from './Text';
import Button from './Button';

const TodoItem = ({ todo }) => {
  const { toggle, remove } = useStoreActions(actions => ({
    toggle: actions.toggle,
    remove: actions.remove
  }));

  return (
    <li className="todo-item" key={todo._id}>
      <Text
        as="span"
        onClick={() => toggle(todo._id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.title}
      </Text>
      <Button onClick={() => remove(todo._id)}>Deletar</Button>
    </li>
  );
};

export default TodoItem;
