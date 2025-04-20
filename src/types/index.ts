export type Priority = 'high' | 'medium' | 'low';

export type Category = 'personal' | 'work' | 'shopping' | 'health' | 'finance';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
  priority: Priority;
  dueDate: string | null;
  createdAt: number;
}

export type SortOption = 'dueDate' | 'priority' | 'created';
export type FilterOption = 'all' | 'active' | 'completed';
export type CategoryFilter = Category | 'all';
export type PriorityFilter = Priority | 'all';

export type ThemeMode = 'light' | 'dark';