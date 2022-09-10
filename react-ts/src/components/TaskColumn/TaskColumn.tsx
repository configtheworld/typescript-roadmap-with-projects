import React from 'react';
import { ITask } from '../models/types';
import TaskCard from '../TaskCard/TaskCard';
import './TaskColumn.css';
interface Props {
  columnName: string;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const TaskColumn: React.FC<Props> = ({ tasks, setTasks, columnName }) => {
  return (
    <div className="taskcolumn">
      <div>{columnName}</div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <TaskCard task={task} tasks={tasks} setTasks={setTasks} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskColumn;
