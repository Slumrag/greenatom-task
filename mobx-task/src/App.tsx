import { observer } from 'mobx-react';
import { ToDoForm } from './components/forms/ToDoForm';
import { ToDoList } from './components/display/ToDoList';
import { useRootStore } from './hooks/useRootStore';
import { useEffect, useRef } from 'react';

const App = observer(() => {
  const { rootStore } = useRootStore();
  // for fetching once
  const didFetchToDos = useRef(false);
  useEffect(() => {
    if (didFetchToDos.current === false) {
      didFetchToDos.current = true;
      rootStore.fetchToDos();
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <ToDoForm />
      {rootStore.apiStatus === 'pending' && <p>Загрузка...</p>}
      <a href='#end' id='begin'>
        Вниз
      </a>
      {rootStore.toDos.length !== 0 ? (
        <>
          <p>Элементов в списке: {rootStore.toDoCount}</p>
          <ToDoList />
        </>
      ) : (
        <p>не удалось загрузить</p>
      )}
      <a href='#begin' id='end'>
        Вверх
      </a>
    </div>
  );
});

export default App;
