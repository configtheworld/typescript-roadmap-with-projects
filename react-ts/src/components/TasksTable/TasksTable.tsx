import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ITask, StatusTypes } from '../models/types';
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
    console.log('a');
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleOnDragEnd(result: DropResult) {
    const { source, destination } = result;
    // no destination
    if (!destination) return;
    // same destination and position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // same destination but different position
    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      let tempSource = getTasksByColumnId(source.droppableId);
      const tempCard = tempSource.splice(source.index, 1);
      tempSource.splice(destination.index, 0, tempCard[0]);
      setTasksColumnById(destination.droppableId, tempSource);
    }
    // different destination
    if (destination.droppableId !== source.droppableId) {
      let tempSource = getTasksByColumnId(source.droppableId);
      let tempCard = tempSource.splice(source.index, 1);
      tempCard[0].status = decideTaskStatus(source.droppableId);
      let tempDestination = getTasksByColumnId(destination.droppableId);
      tempDestination.splice(destination.index, 0, tempCard[0]);
    }
  }

  /**
   * getTasksByColumnId
   * @param columnId
   * @returns tasks in given column Id
   */
  function getTasksByColumnId(columnId: string): ITask[] {
    if (columnId === 'TODO') {
      return todoTasks;
    } else if (columnId === 'INPROGRESS') {
      return inprocessTasks;
    } else if (columnId === 'DONE') {
      return doneTasks;
    } else {
      return problemTasks;
    }
  }
  /**
   * setTasksColumnById : sets targeted Column Tasks with given Tasks
   * @param columnId
   * @param updatedTasks
   */

  function setTasksColumnById(columnId: string, updatedTasks: ITask[]): void {
    if (columnId === 'TODO') {
      setTodoTasks(updatedTasks);
    } else if (columnId === 'INPROGRESS') {
      setInprocessTasks(updatedTasks);
    } else if (columnId === 'DONE') {
      setDoneTasks(updatedTasks);
    } else {
      // problem tasks
      setProblemTasks(updatedTasks);
    }
    // // update local storage
    // const combinedTasks = [
    //   ...todoTasks,
    //   ...inprocessTasks,
    //   ...doneTasks,
    //   ...problemTasks,
    // ];
    // setTasks(combinedTasks);
    // localStorage.setItem('tasks', JSON.stringify(combinedTasks));
  }

  function decideTaskStatus(columnId: string): StatusTypes {
    if (columnId === 'TODO') {
      return 'todo';
    } else if (columnId === 'INPROGRESS') {
      return 'inprocess';
    } else if (columnId === 'DONE') {
      return 'done';
    } else {
      return 'problem';
    }
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
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
            columnName="INPROGRESS"
          />
        </div>
        <div className="table__item">
          <TaskColumn
            tasks={doneTasks}
            setTasks={setDoneTasks}
            columnName="DONE"
          />
        </div>
        <div className="table__item">
          <TaskColumn
            tasks={problemTasks}
            setTasks={setProblemTasks}
            columnName="PROBLEM"
          />
        </div>
      </div>
    </DragDropContext>
  );
};

export default TasksTable;
