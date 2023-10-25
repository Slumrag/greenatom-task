export async function addToDo(toDo) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos');
  const response = await fetch(toDoURI, {
    method: 'POST',
    body: JSON.stringify({
      title: toDo.title,
      body: '',
      userId: toDo.userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error(`Can't add item to list. Status code ${response.status}`);
  }
  return response;
}
