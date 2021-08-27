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
  handleTodoPosUpdate: (status: string, currentId: string | undefined, clickedId: string) => void;
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

  const handleTodoUpdate = useCallback((text: string, id: number) => {
    setItems((prevItems) =>
      prevItems.map((item: TodoTypes) =>
        id === item.id ? { ...item, taskName: text, updatedAt: currentDate() } : item,
      ),
    );
  }, []);

  const handleTodoPosUpdate = (
    status: string,
    currentId: string | undefined,
    clickedId: string,
  ) => {
    setItems((prevItems) => updatePosition(prevItems));

    const updatePosition = (prevItems: any) => {
      const target = prevItems.find((item: TodoTypes) => item.id === Number(clickedId));
      const targetCard = { ...target, status, updatedAt: currentDate() };
      const excludeTargetCardItems = prevItems.filter(
        (item: TodoTypes) => item.id !== Number(clickedId),
      );

      let index = 0;

      for (let i = 0; i < excludeTargetCardItems.length; i++) {
        if (!currentId) {
          if (excludeTargetCardItems[i].status === status) {
            index = i + 1;
            continue;
          }
        }
        if (excludeTargetCardItems[i].id === Number(currentId)) {
          index = i;
          continue;
        }
      }

      const start = excludeTargetCardItems.slice(0, index);
      const end = excludeTargetCardItems.slice(index);

      return [...start, targetCard, ...end];
    };
  };

  return { items, handleTodoCreate, handleTodoDelete, handleTodoUpdate, handleTodoPosUpdate };
};

export default useTodo;

// const updatePosition = () => {
//     const target = items.find((item: TodoTypes) => item.id === Number(clickedId));
//     const targetCard = { ...target, status, updatedAt: currentDate() };
//     const excludeTargetCardItems = items.filter((item: TodoTypes) => item.id !== Number(clickedId));

//     if (!currentId) {
//       let index = 0;

//       for (let i = 0; i < excludeTargetCardItems.length; i++) {
//         if (excludeTargetCardItems[i].status === status) {
//           index = i + 1;
//         }
//       }

//       const start = excludeTargetCardItems.slice(0, index);
//       const end = excludeTargetCardItems.slice(index);

//       return [...start, targetCard, ...end];
//     }

// }

// const updatePosition = (prevItems: any) => {
//     const target = prevItems.find((item: TodoTypes) => item.id === cardId);
//     const targetCard = { ...targetCard, status, updatedAt: currentDate() };

//     const excludeTargetCardItems = prevItems.filter((item: TodoTypes) => item.id !== cardId);
//     let statusCount = 0;
//     let index = 0;

//     for (let i = 0; i < excludeTargetCardItems.length; i++) {
//       if (excludeTargetCardItems[i].status === status) {
//         statusCount++;

//         if (statusCount === insertIndex) {
//           index = i + 1;
//           break;
//         }
//       }
//     }

//     const start = excludeTargetCardItems.slice(0, index);
//     const end = excludeTargetCardItems.slice(index);
//     const updatedItems = [...start, targetCard, ...end];

//     console.log(updatedItems);

//     return updatedItems;
//   };
