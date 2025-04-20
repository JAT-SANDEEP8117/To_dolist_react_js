import React from 'react';
import { CheckCheck, Trash2, Calendar } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const priorityColors = {
    high: 'bg-red-500/20 text-red-500 border-red-500/30',
    medium: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
    low: 'bg-green-500/20 text-green-500 border-green-500/30',
  };

  const categoryColors = {
    personal: 'bg-purple-500/20 text-purple-500 border-purple-500/30',
    work: 'bg-blue-500/20 text-blue-500 border-blue-500/30',
    shopping: 'bg-pink-500/20 text-pink-500 border-pink-500/30',
    health: 'bg-teal-500/20 text-teal-500 border-teal-500/30',
    finance: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30',
  };

  const borderColorClass = todo.completed 
    ? 'border-gray-600/40' 
    : todo.priority === 'high' 
      ? 'border-red-500/50' 
      : todo.priority === 'medium' 
        ? 'border-amber-500/50' 
        : 'border-green-500/50';

  return (
    <div className={`group relative p-4 mb-3 bg-slate-800/80 dark:bg-slate-800 rounded-lg shadow-md 
                     border-l-4 ${borderColorClass} transition-all duration-300
                     hover:shadow-lg transform hover:translate-y-[-2px]`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <button
              onClick={() => onToggle(todo.id)}
              className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 
                        ${todo.completed 
                          ? 'bg-green-500 text-white' 
                          : 'border-2 border-gray-500 hover:border-green-500'}`}
              aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {todo.completed && <CheckCheck size={14} />}
            </button>
            
            <h3 className={`text-lg text-white transition-all ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}>
              {todo.text}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 ml-9">
            <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[todo.category]}`}>
              {todo.category}
            </span>
            
            <span className={`text-xs px-2 py-1 rounded-full border ${priorityColors[todo.priority]}`}>
              {todo.priority}
            </span>
            
            {todo.dueDate && (
              <span className="text-xs px-2 py-1 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-500 flex items-center gap-1">
                <Calendar size={12} />
                {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-500 hover:text-red-500 p-1 rounded-full hover:bg-red-500/10 transition-colors"
          aria-label="Delete task"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
