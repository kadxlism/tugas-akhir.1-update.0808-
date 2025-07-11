export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const TASK_STATUSES = ['todo', 'in_progress', 'review', 'done'] as const;
export const USER_ROLES = ['admin', 'pm', 'team', 'client'] as const;


