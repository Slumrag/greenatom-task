import { renderToDos } from './renderToDos.js';
import { renderUsers } from './renderUsers.js';

export function renderData({ users, toDos }, { optionsContainer, listContainer }) {
  // console.table(toDos);
  renderUsers(users, optionsContainer);
  renderToDos(toDos, listContainer);
}
