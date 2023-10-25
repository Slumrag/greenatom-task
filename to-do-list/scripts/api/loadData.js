import { loadToDos } from './loadToDos.js';
import { loadUsers } from './loadUsers.js';

export async function loadData() {
  const users = await loadUsers();
  const toDos = await loadToDos();
  const data = {};
  data.users = users;
  data.toDos = toDos.map((el) => ({ ...el, name: users[el.userId].name }));
  return data;
}
