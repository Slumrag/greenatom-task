import { Instance, flow, getSnapshot, t } from 'mobx-state-tree';
import { ToDoModel } from './models/ToDoModel';
import { toDoApi } from '../api';
import { ToDo } from '../api/models/ToDo';

export const RootModel = t
  .model('Root', {
    toDos: t.array(ToDoModel),
    apiStatus: t.optional(t.enumeration('ApiStatus', ['success', 'pending', 'error']), 'success'),
  })
  .views((self) => ({
    get toDoCount() {
      return self.toDos.length;
    },
    getById(id: number) {
      return self.toDos.find((el) => el.id === id);
    },
  }))
  .actions((self) => {
    const fetchToDos = flow(function* () {
      self.apiStatus = 'pending';
      try {
        const data: ToDo[] = yield toDoApi.getToDos();
        data.forEach((el) => {
          const toDoInstance = ToDoModel.create({
            id: el.id,
            title: el.title,
            completed: el.completed,
          });
          self.toDos.push(toDoInstance);
        });

        self.apiStatus = 'success';
        // console.log(getSnapshot(self));
      } catch (error) {
        self.apiStatus = 'error';
        console.error(error);
      }
    });

    const addToDo = flow(function* ({ title }) {
      self.apiStatus = 'pending';
      try {
        const data: ToDo = yield toDoApi.postToDo({ title, completed: false, userId: 1 });
        const toDoInstance = ToDoModel.create(data);

        self.toDos.push(toDoInstance);
        self.apiStatus = 'success';
      } catch (error) {
        self.apiStatus = 'error';
        console.error(error);
      }
    });
    const deleteToDo = flow(function* ({ id }) {
      self.apiStatus = 'pending';
      try {
        yield toDoApi.deleteToDo(id);
        // const toDoInstance = ToDoModel.create(data);
        const index = self.toDos.findIndex((el) => el.id === id);
        const deleted = self.toDos.splice(index, 1);
        self.apiStatus = 'success';

        // console.log(index, getSnapshot(self));
      } catch (error) {
        self.apiStatus = 'error';
        console.error(error);
      }
    });

    return {
      fetchToDos,
      addToDo,
      deleteToDo,
    };
  });
export interface IRootModel extends Instance<typeof RootModel> {}
