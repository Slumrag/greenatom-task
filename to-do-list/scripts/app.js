import { addToDo } from './api/addToDo.js';
import { changeToDo } from './api/changeToDo.js';
import { loadToDos } from './api/loadToDos.js';
import { loadUsers } from './api/loadUsers.js';
import { renderToDos } from './render/renderToDos.js';
import { renderUsers } from './render/renderUsers.js';
if (!navigator.onLine) {
  alert('No internet connection. Please, try again later.');
}
const optionsContainer = document.querySelector('#user-todo');
const listContainer = document.querySelector('#todo-list');
const addForm = document.querySelector('.todo__add');
//add new todo
document.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!e.target.closest('.todo__add')) return;
  const form = e.target;
  const title = form['todo-title'].value;
  const userId = form['todo-user'].value;
  // console.log({ title, userId }, submitButton);

  addToDo({ title, userId })
    .then((resp) => console.log(resp))
    .catch((err) => alert(err));
});
// enable submit on valid form
document.addEventListener('input', (e) => {
  if (!e.target.closest('.todo__add')) return;
  const submitButton = addForm.querySelector('[type="submit"]');
  const title = addForm['todo-title'];
  const userId = addForm['todo-user'];
  const isValid = title.checkValidity() && +userId.value !== 0;
  submitButton.disabled = !isValid;
});
// change checkbox state
document.addEventListener('click', (e) => {
  if (!e.target.closest('.todo-item')) return;
  if (!e.target.closest('.checkbox')) return;

  const checkbox = e.target;

  e.preventDefault();
  // console.log(checkbox.checked);
  changeToDo({ id: checkbox.id, complete: checkbox.checked })
    .then(({ complete }) => {
      checkbox.checked = complete;
    })
    .catch((err) => alert(err))
    .finally(() => checkbox.classList.remove('pending'));
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.todo-item')) return;
  if (!e.target.closest('.close')) return;
});
loadData()
  .then(renderData)
  .catch((er) => alert(er));
async function loadData() {
  const users = await loadUsers();
  const toDos = await loadToDos();
  const data = {};
  data.users = users;
  data.toDos = toDos.map((el) => ({ ...el, name: users[el.userId].name }));
  return data;
}
function renderData({ users, toDos }) {
  // console.table(toDos);
  renderUsers(users, optionsContainer);
  renderToDos(toDos, listContainer);
}
