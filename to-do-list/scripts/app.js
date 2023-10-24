import { loadToDos } from './api/loadToDos.js';
import { loadUsers } from './api/loadUsers.js';
import { renderToDos } from './render/renderToDos.js';
import { renderUsers } from './render/renderUsers.js';
import { groupArrayBy } from './utils/groupArrayBy.js';
if (!navigator.onLine) {
  alert('No internet connection. Please, try again later.');
}
const optionsContainer = document.querySelector('#user-todo');
const listContainer = document.querySelector('#todo-list');

Promise.all([loadUsers(), loadToDos()])
  .then((data) => {
    const users = data[0];
    const toDos = data[1].map((el) => ({ ...el, name: users[el.userId].name }));
    // console.table(toDos);

    listContainer.removeChild(document.querySelector('.placeholder-item'));
    renderUsers(users, optionsContainer);
    renderToDos(toDos, listContainer);
  })
  .catch((er) => alert(er));
