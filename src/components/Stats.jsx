import React, { useMemo } from 'react';
import { BarChart2, CheckCircle, Clock } from 'lucide-react';

// Stats component will display the statistics of the todo list
// It takes `todos` as a prop, which is an array of todo objects
// Each todo object is expected to have properties: completed, priority, and dueDate
const Stats = ({ todos }) => {

  // useMemo to efficiently calculate stats only when `todos` changes
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;

    // checks the high priority tasks that are not completed
    const highPriority = todos.filter(todo => !todo.completed && todo.priority === 'high').length;

    // takes the due date for the next 3 days 
    const dueSoon = todos.filter(todo => {
      if (!todo.completed && todo.dueDate) {
        const dueDate = new Date(todo.dueDate);
        const today = new Date();
        const timeDiff = dueDate.getTime() - today.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        return dayDiff <= 3 && dayDiff >= 0;
      }
      return false;
    }).length;

    return { total, completed, pending, highPriority, dueSoon };
  }, [todos]);

  // If there are no tasks,we  won't render the stats section
  if (todos.length === 0) {
    return null;
  }

  // Render the stats dashboard accordingly
  return (
    <div className="bg-slate-800/80 dark:bg-slate-800 rounded-lg p-4 mb-6 shadow-md">
      
      <h3 className="text-lg font-medium text-white mb-3 flex items-center">
        <BarChart2 size={18} className="mr-2 text-blue-500" />
        Task Statistics
      </h3>
      
      {/* Stats will be  displayed in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        
        {/* tot no of tasks */}
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm">Total Tasks</div>
          <div className="text-2xl font-bold text-white">{stats.total}</div>
        </div>
        
        {/* no of tasks completed  */}
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm">Completed</div>
          <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
        </div>
        
        {/* Pending tasks */}
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm">Pending</div>
          <div className="text-2xl font-bold text-amber-500">{stats.pending}</div>
        </div>
        
        {/* Tasks due soon */}
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm flex items-center">
            <Clock size={14} className="mr-1 text-red-500" /> Due Soon
          </div>
          <div className="text-2xl font-bold text-red-500">{stats.dueSoon}</div>
        </div>
        
        {/*  no of high priority tasks */}
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm flex items-center">
            <CheckCircle size={14} className="mr-1 text-purple-500" /> High Priority
          </div>
          <div className="text-2xl font-bold text-purple-500">{stats.highPriority}</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
