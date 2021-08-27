import React from 'react';
import styled from 'styled-components';
import { RadioBox, FormButtons, FormTextArea } from 'components';
import { useForm } from 'hooks/useForm';

interface CreateFormProps {
  status: string;
  handleVisibleForm: () => void;
  handleTodoCreate: (status: string, text: string, creator: string) => void;
}

const CreateForm: React.FC<CreateFormProps> = ({
  status,
  handleVisibleForm,
  handleTodoCreate,
}): JSX.Element => {
  const { text, creator, handleRadioChange, handleTextAreaChange } = useForm();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleTodoCreate(status, text, creator);

    handleVisibleForm();
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={handleFormSubmit}>
        <FormTextArea
          placeholder="Enter a note"
          text={text}
          handleTextAreaChange={handleTextAreaChange}
        />
        <RadioBox
          values={['남주', '택훈', '진수', '삭']}
          handleRadioChange={handleRadioChange}
          status={status}
        />
        <FormButtons text={text} creator={creator} handleButtonClick={handleVisibleForm} />
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

export default CreateForm;
