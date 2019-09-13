import React, { Fragment, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import Input from './Input';
import Button from './Button';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const saveTodo = useStoreActions(actions => actions.saveTodo);

  return (
    <Fragment>
      <Input
        name="title"
        type="text"
        placeholder="Título do todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button onClick={() => saveTodo({ title, completed: false })}>
        Adicionar
      </Button>
    </Fragment>
  );
};

export default AddTodo;
