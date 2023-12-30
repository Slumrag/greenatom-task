import { Instance, flow, t } from 'mobx-state-tree';
import { toDoApi } from '../../api';
import { ToDo } from '../../api/models/ToDo';

export const ToDoModel = t
  .model('ToDo', {
    id: t.identifierNumber,
    title: t.string,
    completed: t.boolean,
  })
  .actions((self) => {
    const toggle = flow(function* () {
      try {
        const data: ToDo = yield toDoApi.patchToDo(self.id, { completed: !self.completed });
        self.completed = data.completed;
      } catch (error) {
        console.error(error);
      }
    });
    return {
      toggle,
    };
  });
export interface IToDoModel extends Instance<typeof ToDoModel> {}
