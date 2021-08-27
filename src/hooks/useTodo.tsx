import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { TodoTypes } from 'components';
import mockData from 'utils/data.json';
import { currentDate } from 'utils/date';
import { sortTodoHandle } from 'utils/sorting';

type useTodoType = {
  items: TodoTypes[];
  setItems: Dispatch<SetStateAction<TodoTypes[]>>;
  handleTodoCreate: (status: string, text: string, creator: string) => void;
  handleTodoDelete: (taskID: number) => void;
  handleTodoUpdate: () => void;
  handleTodoSort: (status: string) => void;
  handleTodoCreator: (creators: TodoTypes[]) => void;
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

  //filter
  const handleTodoSort = useCallback((status: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.status !== status).sort(sortTodoHandle),
    );
  }, []);

  const handleTodoCreator = useCallback((creators: TodoTypes[]) => {
    const result = creators
      .map((creator: TodoTypes) =>
        setItems((prev) => prev.filter((item: any) => item.creator === creator)),
      )
      .flat();

    console.log('Creator', creators);
    console.log('result', result);
  }, []);

  return {
    items,
    setItems,
    handleTodoCreate,
    handleTodoDelete,
    handleTodoUpdate,
    handleTodoSort,
    handleTodoCreator,
  };
};

export default useTodo;
