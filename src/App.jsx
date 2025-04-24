import { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      isCompleted: false,
      isEditing: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, text: newText, isEditing: false} : todo
    ));
  };

  const startEditing = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isEditing: true} : todo
    ));
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          startEditing={startEditing}
        />
      </div>
    </div>
  );
}

export default App;