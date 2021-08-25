import { TodoTypes } from './TodoTypes';
import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import Form from 'components/common/Form';
import mockData from '../../utils/data.json';

interface TodoContainerProps {
  status: string;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ status }) => {
  const [todoItems, setTodoItems] = useState<TodoTypes[]>(currentTodos(status, mockData));
  const [clickedForm, setClickedForm] = useState<string>(); // 폼이 클릭된 컨테이너 -> form toggle용

  const handleFormOpen = (target: string) => setClickedForm(clickedForm ? '' : target); // 입력폼 열고 닫는 함수
  const handleTodoCreate = () => console.log(status); // 입력폼 submit 후, todoItem 생성하는 함수 (미완)
  const handleTodoDelete = () => console.log(status); // x 버튼(만들어야함)누르면, todoItem 삭제하는 함수 (미완)
  const handleTodoUpdate = () => console.log(status); // 드래그앤 드랍 등 todoItem 변경하는 함수 (미완)

  // 클릭된 form과 현재 컨테이너의 status와 일치하는 컨테이너의 Form 오픈한다
  return (
    <Wrapper>
      <TodoHeader status={status} handleFormOpen={handleFormOpen} />
      {clickedForm && status && (
        <Form clickedForm={clickedForm} handleTodoCreate={handleTodoCreate} />
      )}
      <TodoList
        status={status}
        todoItems={todoItems}
        handleTodoDelete={handleTodoDelete}
        handleTodoUpdate={handleTodoUpdate}
      />
    </Wrapper>
  );
};

const currentTodos = (status: string, items: TodoTypes[]) =>
  items.filter((item) => item.status === status);

const Wrapper = styled.div`
  width: 100%;
`;

export default TodoContainer;
