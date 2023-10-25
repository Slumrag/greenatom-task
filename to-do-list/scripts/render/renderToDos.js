export function renderToDos(toDoArray, listContainer) {
  while (listContainer.children > 0) {
    listContainer.removeChild(listContainer.firstChild);
  }
  if (toDoArray.length === 0) {
    const placeholderElement = document.createElement('li');
    placeholderElement.classList.add('placeholder-item');
    placeholderElement.textContent = 'no items in todo list';

    listContainer.appendChild(placeholderElement);
    return;
  }
  listContainer.removeChild(document.querySelector('.placeholder-item'));
  toDoArray?.forEach((toDoItem) => {
    const toDoElement = createToDoElement(toDoItem);
    listContainer?.append(toDoElement);
  });
}

function createToDoElement(toDOItem) {
  const toDoElement = document.createElement('li');
  toDoElement.className = 'list__item todo-item';
  toDoElement.innerHTML = ` <input
              class="todo-item__check checkbox"
              type="checkbox"
              name="to-do-check"
              id="${toDOItem?.id}"
              ${toDOItem?.completed ? 'checked' : ''}
            />
            <p class="todo-item__text">${toDOItem?.title}</p>
            <p class="todo-item__user">${toDOItem?.name}</p>
            <button class="todo-item__delete close" title="remove from list">x</button>`;

  return toDoElement;
}
