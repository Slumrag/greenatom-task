import React from 'react';
import { ToDoForm } from './components/forms/ToDoForm';
import { ToDoList } from './components/display/ToDoList';

function App() {
  return (
    <div
      className=''
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
