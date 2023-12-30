import { ReactNode } from 'react';
import { RootModel } from '../../store';
import { store, StoreContext } from '../../store/setupRootStore';

// create the provider component

export function RootStoreProvider({ children }: { children: ReactNode }) {
  //only create the store once ( store is a singleton)
  const root = store ?? RootModel.create({ toDos: [] });

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}
