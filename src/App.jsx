import React from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import Stats from './components/Stats';
import { useTodos } from './hooks/useTodos';
import { useTheme } from './hooks/useTheme';

function App() {
  const { 
    todos, 
    addTodo, 
    toggleTodo, 
    deleteTodo,
    sortBy,
    setSortBy,
    filterStatus,
    setFilterStatus,
    categoryFilter,
    setCategoryFilter,
    priorityFilter,
    setPriorityFilter
  } = useTodos();
  
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-gray-100 text-slate-900'} p-4 sm:p-8`}>
      <div className="max-w-4xl mx-auto">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <TodoInput onAddTodo={addTodo} />
          
          <Stats todos={todos} />
          
          <FilterBar
            sortBy={sortBy}
            onSortChange={setSortBy}
            filterStatus={filterStatus}
            onStatusChange={setFilterStatus}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
            priorityFilter={priorityFilter}
            onPriorityChange={setPriorityFilter}
          />
          
          <TodoList 
            todos={todos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo}
          />
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
        <p>Designed &amp; Developed by Jat Sandeep with &hearts; | &copy; {new Date().getFullYear()} - Helping you stay on top of your day, one task at a time.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;