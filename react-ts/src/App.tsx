import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ITask } from './components/models/types';
import SearchBar from './components/SearchBar/SearchBar';
import { v4 as uuidv4 } from 'uuid';
import TasksTable from './components/TasksTable/TasksTable';

const App: React.FC = () => {
  const [taskContent, setTaskContent] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (taskContent) {
      const taskDraft: ITask = {
        id: uuidv4(),
        content: taskContent,
        status: 'todo',
        date: new Date(),
      };
      setTasks([...tasks, taskDraft]);
      setTaskContent('');
    }
  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        taskContent={taskContent}
        setTaskContent={setTaskContent}
        handleAdd={handleAdd}
      />
      <TasksTable tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
