import { createContext } from 'react';
import { IRootModel, RootModel } from '.';

export function setupRootStore() {
  const rootStore: IRootModel = RootModel.create({ toDos: [] });
  return { rootStore };
}
// holds a reference to the store (singleton)
export let store: IRootModel;

// create the context
export const StoreContext = createContext<IRootModel | undefined>(undefined);
