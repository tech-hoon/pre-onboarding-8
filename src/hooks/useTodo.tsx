import { TodoTypes } from 'components';
import { useCallback, useState } from 'react';
import mockData from 'utils/data.json';
import { currentDate } from 'utils/date';

const useTodo = () => {
  const [items, setItems] = useState<TodoTypes[]>(mockData);
  const [nextID, setNextID] = useState<number>(items.length);

  const handleTodoCreate = useCallback((status: string, text: string, creator: string) => {
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
  }, []);
  const handleTodoDelete = useCallback(() => console.log(status), []); // x 버튼(만들어야함)누르면, todoItem 삭제하는 함수 (미완)
  const handleTodoUpdate = useCallback(() => console.log(status), []); // 드래그앤 드랍 등 todoItem 변경하는 함수 (미완)

  return { items, handleTodoCreate, handleTodoDelete, handleTodoUpdate };
};

export default useTodo;
