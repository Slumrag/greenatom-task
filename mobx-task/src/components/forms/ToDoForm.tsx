import React from 'react';

export const ToDoForm = () => {
  const submitHandler = () => {};
  return (
    <form
      action='.'
      autoComplete='off'
      onSubmit={(event) => {
        event.preventDefault();
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input type='text' name='to-do-text' id=''></input>
      <button type='submit'>add toddo</button>
    </form>
  );
};
