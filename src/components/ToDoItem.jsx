import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, toggleComplete, editTodo, startEditing }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(todo.id, editText);
  };

  const handleCancel = () => {
    // Reset the edit text to original value
    setEditText(todo.text);
    // Exit edit mode by setting isEditing to false
    editTodo(todo.id, todo.text, false);
  };

  return (
    <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <form className="edit-form" onSubmit={handleEdit}>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <button type="submit" className="save-btn">Save</button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="todo-content">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleComplete(todo.id)}
            className="checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button 
              onClick={() => startEditing(todo.id)} 
              className="edit-btn"
              disabled={todo.isCompleted}
            >
              Edit
            </button>
            <button 
              onClick={() => deleteTodo(todo.id)} 
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}