import React, { useState } from "react";

interface Props {
  addTodo: addTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input 
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value)
        }} 
        />
      <button 
        type="submit"
        onClick={(event) =>{
          event.preventDefault();
          addTodo(text);
          setText('');
        }}  
      >
        add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;