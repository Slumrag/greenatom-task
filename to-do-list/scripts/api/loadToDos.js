export async function loadToDos(page) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/todos');
  const response = await fetch(toDoURI, { method: 'GET' });
  if (!response.ok) {
    const badResponseMsg = `Can't load to do list. Status code ${response.status}`;
    // alert(badResponseMsg);
    const error = new Error(badResponseMsg);
    throw error;
  }
  const data = await response.json();
  return data;
}
