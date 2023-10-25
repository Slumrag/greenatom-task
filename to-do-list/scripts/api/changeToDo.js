export async function changeToDo(toDo) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos/');
  toDoURI.pathname = toDoURI.pathname + toDo.id;
  const body = {
    complete: toDo.complete,
    body: '',
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
  return body;
}
