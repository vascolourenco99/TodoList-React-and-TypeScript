import React from 'react';

interface Todo {
  text: string;
  done: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;


interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
  return( 
  <li>
    <label
      style={{textDecoration: todo.done? 'line-through' : undefined}}
    >
      <input
      type="checkbox" 
      checked={todo.done} 
      onClick={() => {
        toggleTodo(todo);
      }}
      />{' '}
     {todo.text}
    </label>
  </li>
  );
};

export default TodoListItem