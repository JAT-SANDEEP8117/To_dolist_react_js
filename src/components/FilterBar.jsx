import React from 'react';
import { SlidersHorizontal, Calendar, Clock, Filter } from 'lucide-react';

const FilterBar = ({
  sortBy,
  onSortChange,
  filterStatus,
  onStatusChange,
  categoryFilter,
  onCategoryChange,
  priorityFilter,
  onPriorityChange,
}) => {
  return (
    <div className="bg-slate-800/80 dark:bg-slate-800 rounded-lg p-4 mb-6 shadow-md">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-1">
            <Filter size={14} /> Status
          </label>
          <select
            value={filterStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full p-2 bg-slate-700 text-white rounded-md cursor-pointer"
          >
            <option value="all">All Tasks</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-1">
            <SlidersHorizontal size={14} /> Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-2 bg-slate-700 text-white rounded-md cursor-pointer"
          >
            <option value="created">Recently Added</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-1">
            <Calendar size={14} /> Category
          </label>
          <select
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-2 bg-slate-700 text-white rounded-md cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-400 mb-1 flex items-center gap-1">
            <Clock size={14} /> Priority
          </label>
          <select
            value={priorityFilter}
            onChange={(e) => onPriorityChange(e.target.value)}
            className="w-full p-2 bg-slate-700 text-white rounded-md cursor-pointer"
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;