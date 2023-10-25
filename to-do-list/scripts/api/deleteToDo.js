export async function deleteToDo(toDo) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos/');
  toDoURI.pathname = toDoURI.pathname + toDo.id;

  const checkbox = document.getElementById(toDo.id);
  checkbox.parentElement.classList.add('pending');
  const response = await fetch(toDoURI, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    throw new Error(`Can't delete item in list. Status code ${response.status}`);
  }
  const data = await response.json();
  return data;
}
