import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-slate-800/50 dark:bg-slate-800/80 rounded-lg">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-medium text-white mb-2">All caught up!</h3>
        <p className="text-gray-400">You have no tasks remaining in this view.</p>
      </div>
    );
  }

  return (
    <div className="transition-all">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default TodoList;
