export interface TaskPayload {
  title: string;
  description?: string;
  due_date?: string;
  assigned_to?: number;
  priority?: "low" | "medium" | "high";
}
