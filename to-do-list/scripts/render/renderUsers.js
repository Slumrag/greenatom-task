export function renderUsers(users, optionsContainer) {
  while (optionsContainer.lastChild.value > 0) {
    optionsContainer.lastChild.remove();
  }
  for (const key in users) {
    if (!Object.hasOwnProperty.call(users, key)) {
      return;
    }
    const user = { id: [key], ...users[key] };
    const userOption = createUserOption(user);
    optionsContainer?.append(userOption);
  }
}
function createUserOption(user) {
  const optionItem = document.createElement('option');
  optionItem.value = user?.id;
  optionItem.text = `${user?.name}`;
  return optionItem;
}
