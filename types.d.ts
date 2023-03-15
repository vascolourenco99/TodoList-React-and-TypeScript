interface Todo {
  text: string;
  done: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type addTodo = (text: string) => void;