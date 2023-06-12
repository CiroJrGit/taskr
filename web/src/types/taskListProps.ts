export interface ListProps {
  id: number;
  title: string;
  theme: string;
  tasks: TaskProps[];
}

export interface TaskProps {
  id: number;
  name: string;
  done: boolean;
}
