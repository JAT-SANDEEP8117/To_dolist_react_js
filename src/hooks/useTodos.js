import { useState, useEffect } from 'react';
import { saveTodos, loadTodos } from '../utils/localStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState([]); 
  const [sortBy, setSortBy] = useState('created'); 
  const [filterStatus, setFilterStatus] = useState('all'); 
  const [categoryFilter, setCategoryFilter] = useState('all'); 
  const [priorityFilter, setPriorityFilter] = useState('all'); // States to manage todos, sorting, and filtering

  useEffect(() => {
    setTodos(loadTodos()); // Loading of  todos from localStorage on mount
  }, []);

  useEffect(() => {
    saveTodos(todos); // Save todos to localStorage whenever the list changes
  }, [todos]);

  // Addition of a new todo to the list
  const addTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: crypto.randomUUID(), // Generation of  a unique ID for the new todo
      completed: false,
      createdAt: Date.now(), // Timestamp when the todo was created
    };
    setTodos([...todos, newTodo]); // Add the new todo to the list
  };

  // Toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo by its ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Remove the todo from the list
  };

  // Update the order of todos (e.g., after a drag-and-drop action)
  const updateTodoOrder = (reorderedTodos) => {
    setTodos(reorderedTodos); // Set the new order of todos
  };

  // Apply filters and sorting to the todos
  const filteredAndSortedTodos = () => {
    let filtered = [...todos];

    // Filter by status (active or completed)
    if (filterStatus !== 'all') {
      filtered = filtered.filter(
        (todo) => todo.completed === (filterStatus === 'completed')
      );
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((todo) => todo.category === categoryFilter);
    }

    // Filter by priority
    if (priorityFilter !== 'all') {
      filtered = filtered.filter((todo) => todo.priority === priorityFilter);
    }

    // Sort todos based on the selected method
    return filtered.sort((a, b) => {
      if (sortBy === 'priority') {
        // Sort by priority (high, medium, low)
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortBy === 'dueDate') {
        // Sort by due date
        if (!a.dueDate) return 1; // Place todos without due date at the end
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else {
        // Default sort by creation date (newest first)
        return b.createdAt - a.createdAt;
      }
    });
  };

  // Return filtered and sorted todos, and methods to modify the todos
  return {
    todos: filteredAndSortedTodos(),
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodoOrder,
    sortBy,
    setSortBy,
    filterStatus,
    setFilterStatus,
    categoryFilter,
    setCategoryFilter,
    priorityFilter,
    setPriorityFilter,
  };
};
