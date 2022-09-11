import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ITask } from '../models/types';
import TaskCard from '../TaskCard/TaskCard';
import './TaskColumn.css';
interface Props {
  columnName: string;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function decideTitleType(columnName: string): string {
  if (columnName === 'TODO') {
    return 'To-Do';
  } else if (columnName === 'INPROGRESS') {
    return 'In Progress';
  } else if (columnName === 'DONE') {
    return 'Done!';
  } else {
    return 'Problem';
  }
}

const TaskColumn: React.FC<Props> = ({ tasks, setTasks, columnName }) => {
  return (
    <Droppable droppableId={columnName}>
      {(provided) => (
        <div
          className="taskcolumn"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="taskcolumn__title">{decideTitleType(columnName)}</div>
          {tasks.map((task, index) => {
            return (
              <div key={task.id}>
                <TaskCard
                  index={index}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              </div>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;
