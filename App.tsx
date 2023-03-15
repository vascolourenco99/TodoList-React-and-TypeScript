import React, { useState } from 'react';
import { TodoList } from './componets/TodoList';
import AddTodoForm from './componets/AddTodoForm';

const initialTodos: Todo[] = []

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo, done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: addTodo = (text: string) => {
    const newTodo = { text, done: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </>
  )
}

export default App;
