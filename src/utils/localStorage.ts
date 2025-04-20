import { Todo, ThemeMode } from '../types';

const TODOS_KEY = 'todos-app-data';
const THEME_KEY = 'todos-app-theme';

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
  const data = localStorage.getItem(TODOS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTheme = (theme: ThemeMode): void => {
  localStorage.setItem(THEME_KEY, theme);
};

export const loadTheme = (): ThemeMode => {
  return (localStorage.getItem(THEME_KEY) as ThemeMode) || 'dark';
};