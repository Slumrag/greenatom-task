import React, { FC, MouseEventHandler } from 'react';

interface ToDoListItemProps {
  id: number;
  title?: string;
  isChecked: boolean;
  onCheck?: () => void;
}
export const ToDoListItem: FC<ToDoListItemProps> = ({ id, title, isChecked = false, onCheck }) => {
  return (
    <tr
      style={{
        border: '1px solid grey',
        display: 'grid',
        gridTemplateColumns: 'min-content minmax(0,1fr) min-content',
        alignItems: 'center',
        gap: 10,
        padding: '0 5px',
      }}
    >
      <td
        style={{
          fontWeight: 'bold',
        }}
      >
        {id}
      </td>
      <td>
        <p className='title'>{title ?? title}</p>
      </td>
      <td>
        <input
          type='checkbox'
          name='to-do'
          id=''
          defaultChecked={isChecked}
          onClick={() => {
            console.log('click');
            onCheck && onCheck();
          }}
        />
      </td>
    </tr>
  );
};
