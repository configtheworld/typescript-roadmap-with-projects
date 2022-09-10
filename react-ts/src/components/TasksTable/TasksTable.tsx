import React, { useEffect, useState } from 'react';
import { ITask } from '../models/types';

interface Props {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TasksTable: React.FC<Props> = ({ tasks, setTasks }) => {
  const [todoTasks, setTodoTasks] = useState<ITask[]>([]);
  const [inprocessTasks, setInprocessTasks] = useState<ITask[]>([]);
  const [doneTasks, setDoneTasks] = useState<ITask[]>([]);
  const [problemTasks, setProblemTasks] = useState<ITask[]>([]);

  useEffect(() => {
    function decideTaskTable(tasks: ITask[]): void {
      const todos = tasks.filter((task) => task.status === 'todo');
      const inprocesses = tasks.filter((task) => task.status === 'inprocess');
      const dones = tasks.filter((task) => task.status === 'done');
      const problems = tasks.filter((task) => task.status === 'problem');
      setTodoTasks(todos);
      setInprocessTasks(inprocesses);
      setDoneTasks(dones);
      setProblemTasks(problems);
    }
    decideTaskTable(tasks);
  }, [tasks]);

  return (
    <div>
      TasksTable
      {todoTasks.map((task) => {
        return (
          <div key={task.id}>
            <span> {task.date?.getDate + ' ' + task.status}</span> -{' '}
            {task.content}
          </div>
        );
      })}
    </div>
  );
};

export default TasksTable;
