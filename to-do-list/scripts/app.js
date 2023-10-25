import { addToDo } from './api/addToDo.js';
import { changeToDo } from './api/changeToDo.js';
import { deleteToDo } from './api/deleteToDo.js';
import { loadData } from './api/loadData.js';
import { createToDoElement } from './render/renderToDos.js';
import { renderData } from './render/renderData.js';
const optionsContainer = document.querySelector('#user-todo');
const listContainer = document.querySelector('#todo-list');

window.addEventListener('offline', (params) => {
  alert('No internet connection. Please, try again later.');
});
window.addEventListener('online', (params) => {
  loadData()
    .then((data) => renderData(data, { optionsContainer, listContainer }))
    .catch((err) => alert(err));
});
window.addEventListener('load', (params) => {
  if (!navigator.onLine) return;
  loadData()
    .then((data) => renderData(data, { optionsContainer, listContainer }))
    .catch((err) => alert(err));
});
const addForm = document.querySelector('.todo__add');
const submitButton = document.querySelector('.button[type="submit"]');

// enable submit on valid form
document.addEventListener('input', (e) => {
  if (!e.target.closest('.todo__add')) return;
  const title = addForm['todo-title'];
  const userId = addForm['todo-user'];
  const isValid = title.checkValidity() && +userId.value !== 0;
  submitButton.disabled = !isValid;
});
//add new todo
document.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!e.target.closest('.todo__add')) return;
  const form = e.target;
  const title = form['todo-title'].value;
  const userId = form['todo-user'].value;
  // console.log({ title, userId }, submitButton);
  if (!navigator.onLine) return;
  addToDo({ title, userId })
    .then((data) => {
      const element = createToDoElement(data);
      listContainer.firstElementChild.before(element);
      form.reset();
      submitButton.disabled = true;
    })
    .catch((err) => alert(err))
    .finally(() => submitButton.classList.remove('pending'));
});
// change checkbox state
document.addEventListener('click', (e) => {
  if (!e.target.closest('.todo-item')) return;
  if (!e.target.closest('.checkbox')) return;

  const checkbox = e.target;
  e.preventDefault();
  if (!navigator.onLine) return;
  changeToDo({ id: checkbox.id, completed: checkbox.checked })
    .then((data) => {
      // console.log(data);
      checkbox.checked = data.completed;
    })
    .catch((err) => alert(err))
    .finally(() => checkbox.classList.remove('pending'));
});
//delete todo item
document.addEventListener('click', (e) => {
  if (!e.target.closest('.todo-item')) return;
  if (!e.target.closest('.close')) return;
  const checkbox = e.target.parentElement.querySelector('.checkbox');
  if (!navigator.onLine) return;
  if (!checkbox.parentElement) return;

  deleteToDo({ id: checkbox.id })
    .then((data) => {
      // console.log(data);
      checkbox.parentElement.remove();
    })
    .catch((err) => alert(err))
    .finally(() => checkbox?.parentElement?.classList?.remove('pending'));
});
