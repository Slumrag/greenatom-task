import { groupArrayBy } from '../utils/groupArrayBy.js';

export async function loadUsers(params) {
  const usersURI = new URL('https://jsonplaceholder.typicode.com/users/');
  const response = await fetch(usersURI, { method: 'GET' });
  if (!response.ok) {
    const badResponseMsg = `Can't load users. Status code ${response.status}`;
    // alert(badResponseMsg);
    const error = new Error(badResponseMsg);
    throw error;
  }
  const data = await response.json();
  return groupArrayBy(data, 'id');
}
