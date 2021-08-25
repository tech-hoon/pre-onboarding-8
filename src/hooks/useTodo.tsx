import { useCallback, useState } from 'react';
import mockData from 'utils/data.json';

const useTodo = () => {
  const [items, setItems] = useState(mockData);

  const handleTodoCreate = useCallback(() => console.log(status), []); // 입력폼 submit 후, todoItem 생성하는 함수 (미완)
  const handleTodoDelete = useCallback(() => console.log(status), []); // x 버튼(만들어야함)누르면, todoItem 삭제하는 함수 (미완)
  const handleTodoUpdate = useCallback(() => console.log(status), []); // 드래그앤 드랍 등 todoItem 변경하는 함수 (미완)

  return { items, handleTodoCreate, handleTodoDelete, handleTodoUpdate };
};

export default useTodo;
