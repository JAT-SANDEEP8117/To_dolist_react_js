import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  // If no todos are left, display a message indicating no tasks are remaining
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-slate-800/50 dark:bg-slate-800/80 rounded-lg">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-medium text-white mb-2">All caught up!</h3>
        <p className="text-gray-400">You have no tasks remaining to do.</p>
      </div>
    );
  }

  return (
    <div className="transition-all">
      {/* iterating over the todos  array and rendering the  todoitem for each todo */}
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id}  // Unique key for each todo item 
          todo={todo}  // Passing  the current todo item to TodoItem component
          onToggle={onToggle}  // Passing  the onToggle function to handle task completion
          onDelete={onDelete}  // Passing  the onDelete function to handle task deletion
        />
      ))}
    </div>
  );
};

export default TodoList;
