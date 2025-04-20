import React, { useMemo } from 'react';
import { BarChart2, CheckCircle, Clock } from 'lucide-react';

const Stats = ({ todos }) => {
  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;
    const highPriority = todos.filter(todo => !todo.completed && todo.priority === 'high').length;
    
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

  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="bg-slate-800/80 dark:bg-slate-800 rounded-lg p-4 mb-6 shadow-md">
      <h3 className="text-lg font-medium text-white mb-3 flex items-center">
        <BarChart2 size={18} className="mr-2 text-blue-500" />
        Task Statistics
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm">Total Tasks</div>
          <div className="text-2xl font-bold text-white">{stats.total}</div>
        </div>
        
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm">Completed</div>
          <div className="text-2xl font-bold text-green-500">{stats.completed}</div>
        </div>
        
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm">Pending</div>
          <div className="text-2xl font-bold text-amber-500">{stats.pending}</div>
        </div>
        
        <div className="bg-slate-700/50 rounded-md p-3">
          <div className="font-medium text-gray-400 text-sm flex items-center">
            <Clock size={14} className="mr-1 text-red-500" /> Due Soon
          </div>
          <div className="text-2xl font-bold text-red-500">{stats.dueSoon}</div>
        </div>
        
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