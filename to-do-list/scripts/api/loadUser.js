export async function loadUser(userId) {
  const toDoURI = new URL('https://jsonplaceholder.typicode.com/users/');
  toDoURI.pathname += userId;
  const response = await fetch(toDoURI, { method: 'GET' });
  if (!response.ok) {
    const badResponseMsg = `Can't user id: ${userId}. Status code ${response.status}`;
    // alert(badResponseMsg);
    const error = new Error(badResponseMsg);
    throw error;
  }
  const data = await response.json();
  return data;
}
