import { TodoTypes } from 'components';
import { useState } from 'react';
import { currentDate } from 'utils/date';
import mockData from 'utils/data.json';

const useTodo = () => {
  const [items, setItems] = useState<TodoTypes[]>(mockData);
  const [nextID, setNextID] = useState<number>(items.length);

  const handleTodoCreate = (status: string, text: string, creator: string) => {
    setItems([
      ...items,
      {
        id: nextID,
        taskName: text,
        status: status,
        creator: creator,
        createdAt: currentDate(),
      },
    ]);

    setNextID((prevID) => prevID + 1);
  };

  const handleTodoDelete = (taskID: number) => {
    const newItems = [...items];
    newItems.splice(
      newItems.findIndex(({ id }) => id === taskID),
      1,
    );
    setItems(newItems);
    setNextID((prevID) => prevID - 1);
  };

  const handleTodoUpdate = () => {
    // 드래그앤 드랍 등 todoItem 변경하는 함수
  };

  return { items, handleTodoCreate, handleTodoDelete, handleTodoUpdate };
};

export default useTodo;
