import React from 'react';
import styled from 'styled-components';
import Input from './Input';

interface FormProps {
  clickedForm: string;
  handleTodoCreate: () => void;
}

const Form: React.FC<FormProps> = ({ clickedForm, handleTodoCreate }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(clickedForm);
  };

  const onCreate = () => {
    // handleTodoCreate();
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={onSubmit}>
        <Input />
        <h3>생성자 선택</h3>
      </FormStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 12px 0;
  padding: 12px;
  border: 1px solid green;
`;

const FormStyled = styled.form``;

export default Form;
