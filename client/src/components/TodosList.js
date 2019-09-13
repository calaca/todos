import React, { Fragment, useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Warning from './Warning';
import TodoItem from './TodoItem';

const TodosList = () => {
  const todos = useStoreState(state => state.todos);
  const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Warning>Clique em um item para marcá-lo como completo</Warning>
      <ul className="todos-list">
        {todos.length === 0 && <Warning>Não existe nenhum todo ainda</Warning>}
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodosList;
