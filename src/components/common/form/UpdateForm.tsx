import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FormButtons, FormTextArea } from 'components';
import { useForm } from 'hooks/useForm';

interface UpdateForm {
  itemId: number;
  taskName: string;
  handleVisibleForm: () => void;
  handleTodoUpdate: (text: string, id: number) => void;
}

const UpdateForm: React.FC<UpdateForm> = ({
  handleVisibleForm,
  handleTodoUpdate,
  itemId,
  taskName,
}): JSX.Element => {
  const { text, handleTextAreaChange } = useForm(taskName);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleTodoUpdate(text, itemId);

    handleVisibleForm();
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={handleFormSubmit}>
        <FormTextArea
          placeholder={taskName}
          text={text}
          handleTextAreaChange={handleTextAreaChange}
        />
        <FormButtons text={text} handleButtonClick={handleVisibleForm} />
      </FormStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 12px 0;
  padding: 20px;
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
`;

const FormStyled = styled.form``;

export default UpdateForm;
