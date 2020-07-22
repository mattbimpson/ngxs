export interface Todo {
  id: number;
  name: string;
  description: string;
  detail?: {
    dueDate: Date | null,
    moreInfo: string
  };
}
