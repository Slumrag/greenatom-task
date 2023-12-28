## Создать react todo приложение.

1. Создать приложение react с помощью команды npx create-react-app
new-app --template typescript. Установить все необходимые
зависимости.
2. Сделать форму для создания ново todo. (общая структура todo
должна соответствовать )
```
{
  id: number;
  title: string;
  completed: boolean;
}
```

3. Все созданные todo хранить в store (store реализовывать с помощью
mobx-state-tree)
4. Возможность отмечать что todo сделано или нет.
5. Возможность удалять todo.
6. Получать todos из внешнего источника и записывать todos в
хранилище данных (источник:
<https://jsonplaceholder.typicode.com/todos>, user_id игнорировать,
получать данные любым удобным способом)
7. Хранить состояние запроса (‘success’, ‘pending’, ‘error’)
