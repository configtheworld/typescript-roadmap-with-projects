import React, { useState } from 'react';
import { ITask } from '../models/types';
import './TaskCard.css';
interface Props {
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskCard: React.FC<Props> = ({ task, tasks, setTasks }) => {
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

  return (
    <div className="card">
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
      <span className="card__small">
        {task.date?.getDate() +
          '/' +
          task.date?.getMonth() +
          '/' +
          task.date?.getFullYear()}
      </span>
    </div>
  );
};

export default TaskCard;
