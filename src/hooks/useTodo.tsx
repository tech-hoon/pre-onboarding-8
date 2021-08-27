import { TodoTypes } from 'components';
import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { currentDate } from 'utils/date';
import mockData from 'utils/data.json';

type useTodoType = {
  items: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: () => void;
};

const useTodo = (): useTodoType => {
  const [items, setItems] = useState<TodoTypes[]>(mockData);

  const handleTodoCreate = useCallback((status: string, text: string, creator: string) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length + 1,
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

  const handleTodoUpdate = () => {
    // 드래그앤 드랍 등 todoItem 변경하는 함수
  };

  return { items, setItems, handleTodoCreate, handleTodoDelete, handleTodoUpdate };
};

export default useTodo;
