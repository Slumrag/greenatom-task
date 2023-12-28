import React from 'react';
import { ToDoListItem } from './ToDoListItem';

export const ToDoList = () => {
  const list = [0, 1, 2];

  return (
    <table
      style={{
        display: 'flex',
        alignSelf: 'stretch',
      }}
    >
      <tbody
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {list.map((el, index) => (
          <ToDoListItem key={index} id={index + 1} title={'el' + index} isChecked={false} />
        ))}
      </tbody>
    </table>
  );
};
