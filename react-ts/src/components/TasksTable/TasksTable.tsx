import React, { useEffect, useState } from 'react';
import { ITask } from '../models/types';
import TaskColumn from '../TaskColumn/TaskColumn';
import './TasksTable.css';
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
    <div className="table__container">
      <div className="table__item">
        <TaskColumn
          tasks={todoTasks}
          setTasks={setTodoTasks}
          columnName="TODO"
        />
      </div>
      <div className="table__item">
        <TaskColumn
          tasks={inprocessTasks}
          setTasks={setInprocessTasks}
          columnName="In Process"
        />
      </div>
      <div className="table__item">
        <TaskColumn
          tasks={doneTasks}
          setTasks={setDoneTasks}
          columnName="Done"
        />
      </div>
      <div className="table__item">
        <TaskColumn
          tasks={problemTasks}
          setTasks={setProblemTasks}
          columnName="Problem"
        />
      </div>
    </div>
  );
};

export default TasksTable;
