export function renderToDos(toDoArray, listContainer) {
  // console.log(listContainer.children);
  while (listContainer.children.length > 0) {
    listContainer.lastChild.remove();
  }
  if (toDoArray.length === 0) {
    const placeholderElement = createPlaceholder();

    listContainer.appendChild(placeholderElement);
    return;
  }
  document.querySelector('.placeholder-item')?.remove();
  toDoArray?.forEach((toDoItem) => {
    const toDoElement = createToDoElement(toDoItem);
    listContainer?.append(toDoElement);
  });
}
function createPlaceholder() {
  document.createElement('li');
  placeholderElement.classList.add('placeholder-item');
  placeholderElement.textContent = 'no items in todo list';
}
export function createToDoElement(toDOItem) {
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
