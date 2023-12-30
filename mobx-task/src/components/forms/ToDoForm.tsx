import React, { FC, FormEventHandler, useState } from 'react';
import { useRootStore } from '../../hooks/useRootStore';
import { observer } from 'mobx-react';

export interface ToDoFormProps {
  onSubmit?: FormEventHandler;
}
export const ToDoForm: FC<ToDoFormProps> = observer(({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const { rootStore } = useRootStore();
  return (
    <form
      action='.'
      autoComplete='off'
      onSubmit={(event) => {
        event.preventDefault();
        const title = event.currentTarget['title-text'].value;
        rootStore.addToDo({ title });
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <input
        type='text'
        name='title-text'
        id=''
        placeholder='Enter title...'
        value={title}
        onInput={(event) => {
          setTitle(event.currentTarget.value);
        }}
      />
      <button type='submit' disabled={rootStore.apiStatus === 'pending' || !title}>
        add todo
      </button>
    </form>
  );
});
