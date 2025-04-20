import { useState, useEffect } from 'react';
import { saveTodos, loadTodos } from '../utils/localStorage';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [sortBy, setSortBy] = useState('created');
  const [filterStatus, setFilterStatus] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = {
      ...todo,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoOrder = (reorderedTodos) => {
    setTodos(reorderedTodos);
  };

  const filteredAndSortedTodos = () => {
    let filtered = [...todos];

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(
        (todo) => todo.completed === (filterStatus === 'completed')
      );
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((todo) => todo.category === categoryFilter);
    }

    // Apply priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter((todo) => todo.priority === priorityFilter);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortBy === 'dueDate') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else {
        // Default sort by created date (newest first)
        return b.createdAt - a.createdAt;
      }
    });
  };

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
