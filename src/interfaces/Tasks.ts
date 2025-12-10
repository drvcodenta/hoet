export interface Task {
  id?: string;
  title: string;
  description?: string;
  status?: "pending" | "in-progress" | "completed";
  priority?: "low" | "medium" | "high";
  created_on?: string;
  updated_on?: string;
}
