import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ITask } from '../models/types';
import './TaskCard.css';
interface Props {
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  index: number;
}

const TaskCard: React.FC<Props> = ({ task, tasks, setTasks, index }) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [updateText, setUpdateText] = useState<string>(task?.content);

  function handleDiscard() {
    setEditable(false);
    setUpdateText(task.content);
  }
  function handleSave() {
    setEditable(false);
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, content: updateText } : t))
    );
  }

  const DateSpan: React.FC<{ dateString: string }> = ({ dateString }) => {
    const date = new Date(dateString);
    return (
      <span className="card__small">
        {date?.getDate() + '/' + date?.getMonth() + '/' + date?.getFullYear()}{' '}
      </span>
    );
  };

  return (
    <Draggable draggableId={task.id ? task.id : index.toString()} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card__content">
            {editable ? (
              <div className="card__content__edit">
                <input
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                  className="card__content__input"
                />{' '}
                <div>
                  <p className="card__content__text" onClick={handleSave}>
                    Save
                  </p>
                  <p className="card__content__text" onClick={handleDiscard}>
                    Discard
                  </p>
                </div>
              </div>
            ) : (
              <div onClick={() => setEditable(true)}>{task.content}</div>
            )}
          </div>
          <DateSpan dateString={task.date ? task.date : ''} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
