import { type CreateAxiosDefaults } from 'axios';

export const toDoApiConfig: CreateAxiosDefaults = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};
