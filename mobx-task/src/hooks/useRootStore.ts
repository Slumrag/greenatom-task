import { useContext } from 'react';
import { StoreContext } from '../store/setupRootStore';

// create the hook
export function useRootStore() {
  const rootStore = useContext(StoreContext);
  if (rootStore === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return { rootStore };
}
