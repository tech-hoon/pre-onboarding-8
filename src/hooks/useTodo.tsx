import { TodoTypes } from 'components';
import { useState, useCallback } from 'react';
import { currentDate } from 'utils/date';
import { currentId } from 'utils/Id';
import mockData from 'utils/data.json';

type useTodoType = {
  items: TodoTypes[];
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: (text: string, id: number) => void;
};

const useTodo = (): useTodoType => {
  const [items, setItems] = useState<TodoTypes[]>(mockData);

  const handleTodoCreate = useCallback((status: string, text: string, creator: string) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: currentId(prevItems),
        taskName: text,
        status: status,
        creator: creator,
        createdAt: currentDate(),
      },
    ]);
  }, []);

  const handleTodoDelete = useCallback((taskID: number) => {
    setItems((prevItems) => prevItems.filter(({ id }) => id !== taskID));
  }, []);

  const handleTodoUpdate = (text: string, id: number) => {
    setItems((prevItems) =>
      prevItems.map((item: TodoTypes) =>
        id === item.id ? { ...item, taskName: text, updatedAt: currentDate() } : item,
      ),
    );
  };

  return { items, handleTodoCreate, handleTodoDelete, handleTodoUpdate };
};

export default useTodo;
