import React, { FC, MouseEventHandler } from 'react';
import { useRootStore } from '../../hooks/useRootStore';
import { observer } from 'mobx-react';

interface ToDoListItemProps {
  id?: number;
  title?: string;
  isChecked?: boolean;
  onCheck?: () => void;
  onDelete?: () => void;
}
export const ToDoListItem: FC<ToDoListItemProps> = observer(({ id }) => {
  const { rootStore } = useRootStore();
  const toDo = rootStore.getById(id as number);
  return (
    <tr
      style={{
        border: '1px solid grey',
        display: 'grid',
        gridTemplateColumns: 'min-content min-content minmax(0,1fr) min-content',
        alignItems: 'center',
        gap: 10,
        padding: '0 5px',
      }}
    >
      <td>
        <input
          type='checkbox'
          name='to-do'
          id=''
          defaultChecked={toDo?.completed}
          onClick={() => {
            // console.log('click');
            toDo?.toggle();
            // onCheck && onCheck();
          }}
        />
      </td>
      <td
        style={{
          fontWeight: 'bold',
        }}
      >
        {toDo?.id}
      </td>
      <td>
        <p className='title'>{toDo?.title}</p>
      </td>

      <td>
        <button
          onClick={() => {
            rootStore.deleteToDo(toDo);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
});
