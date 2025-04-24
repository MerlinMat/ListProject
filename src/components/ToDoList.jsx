import TodoItem from './ToDoItem';

export default function TodoList({ todos, deleteTodo, toggleComplete, editTodo, startEditing }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No tasks yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            startEditing={startEditing}
          />
        ))
      )}
    </ul>
  );
}