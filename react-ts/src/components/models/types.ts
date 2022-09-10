type StatusTypes = 'problem' | 'todo' | 'inprocess' | 'done';

export interface ITask {
  id?: string;
  content: string;
  status?: StatusTypes;
  date?: Date;
}
