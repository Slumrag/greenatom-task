import React, { FC, useEffect, useState } from 'react';
import { ToDoListItem } from './ToDoListItem';
import { observer } from 'mobx-react-lite';
import { IToDoModel } from '../../store/models/ToDoModel';
import { useRootStore } from '../../hooks/useRootStore';
import { onSnapshot } from 'mobx-state-tree';

interface ToDoListProps {
  toDos?: IToDoModel[];
}
export const ToDoList: FC<ToDoListProps> = observer(() => {
  const { rootStore } = useRootStore();

  // onSnapshot(rootStore, (snapshot) => {
  //   console.log(snapshot);
  // });

  return (
    <table
      style={{
        display: 'flex',
        // alignSelf: 'c',
        maxWidth: '900px',
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
        {rootStore.toDos?.map((el, index) => (
          <ToDoListItem key={index} id={el?.id} />
        ))}
      </tbody>
    </table>
  );
});
