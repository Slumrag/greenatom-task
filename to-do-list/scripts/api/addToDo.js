import { loadUser } from './loadUser.js';

export async function addToDo(toDo) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos/');
  const body = {
    title: toDo.title,
    body: '',
    userId: toDo.userId,
    completed: false,
  };
  const submitButton = document.querySelector('.button[type="submit"]');
  submitButton.classList.add('pending');
  const response = await fetch(toDoURI, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error(`Can't add item to list. Status code ${response.status}`);
  }
  const data = await response.json();
  const user = await loadUser(data.userId);
  return { ...data, name: user.name };
}
