export async function changeToDo(toDo) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos/');
  toDoURI.pathname = toDoURI.pathname + toDo.id;
  const body = {
    completed: toDo.completed,
  };
  console.log(toDoURI);
  const checkbox = document.getElementById(toDo.id);
  checkbox.classList.add('pending');
  const response = await fetch(toDoURI, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error(`Can't change item in list. Status code ${response.status}`);
  }
  const data = await response.json();
  return data;
}
