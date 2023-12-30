import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';
import { ToDo } from './models/ToDo';
import { toDoApiConfig } from './config/toDoApiConfig';

export class ToDoApi {
  api: AxiosInstance;
  constructor(config: CreateAxiosDefaults) {
    this.api = axios.create(config);
  }
  async getToDos() {
    try {
      const response = await this.api.get<ToDo[]>('/todos');
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async postToDo(todo: Omit<ToDo, 'id'>) {
    try {
      const response = await this.api.post<ToDo>('/todos', todo);
      if (response.status >= 400) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async patchToDo(id: number, todo: Partial<Omit<ToDo, 'id'>>) {
    try {
      const response = await this.api.patch<ToDo>('/todos/' + id, todo);
      if (response.status >= 400) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async deleteToDo(id: number) {
    try {
      const response = await this.api.delete<ToDo>('/todos/' + id);
      if (response.status >= 400) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export const toDoApi = new ToDoApi(toDoApiConfig);
