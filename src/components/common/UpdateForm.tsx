import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { FormButtons, FormTextArea } from 'components';
import { useForm } from 'hooks/useForm';

interface UpdateForm {
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
  itemId: number;
  handleTodoUpdate: (text: string, id: number) => void;
}

const UpdateForm: React.FC<UpdateForm> = ({ setIsVisibleForm, handleTodoUpdate, itemId }) => {
  const { text, handleTextAreaChange } = useForm();

  const handleButtonClick = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleTodoUpdate(text, itemId);

    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={handleFormSubmit}>
        <FormTextArea
          placeholder="Enter a note"
          text={text}
          handleTextAreaChange={handleTextAreaChange}
        />
        <FormButtons text={text} handleButtonClick={handleButtonClick} />
      </FormStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 12px 0;
  padding: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
`;

const FormStyled = styled.form``;

export default UpdateForm;
