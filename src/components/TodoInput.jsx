import React, { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('personal');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo({
        text,
        category,
        priority,
        dueDate: dueDate || null,
      });
      setText('');
      // Keep the other options as they are for quicker task entry
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800/80 dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-6"
    >
      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full p-3 bg-slate-700/60 dark:bg-slate-700 text-white rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Task description"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 bg-slate-700/60 dark:bg-slate-700 text-white rounded-lg appearance-none 
                    cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Task category"
        >
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="finance">Finance</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-3 bg-slate-700/60 dark:bg-slate-700 text-white rounded-lg appearance-none 
                    cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Task priority"
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-3 bg-slate-700/60 dark:bg-slate-700 text-white rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Due date"
        />
      </div>

      <button
        type="submit"
        className={`w-full p-3 text-white rounded-lg font-medium transition-all transform
                  ${text.trim() ? 'bg-blue-500 hover:bg-blue-600 active:scale-[0.99]' 
                                : 'bg-blue-500/50 cursor-not-allowed'}
                  focus:outline-none focus:ring-2 focus:ring-blue-700`}
        disabled={!text.trim()}
        aria-label="Add task"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;
