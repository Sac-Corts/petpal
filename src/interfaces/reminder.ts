export interface Reminder {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  recurrence: "none" | "daily" | "weekly" | "monthly";
  email: string;
}
