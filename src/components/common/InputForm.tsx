import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { RadioBox } from 'components';

interface InputFormProps {
  status: string;
  setIsVisibleForm: Dispatch<SetStateAction<boolean>>;
  handleTodoCreate: (status: string, text: string, creator: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ status, setIsVisibleForm, handleTodoCreate }) => {
  const [text, setText] = useState('');
  const [creator, setCreator] = useState('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreator(e.target.value);
  };

  const handleButtonClick = () => {
    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleTodoCreate(status, text, creator);

    setIsVisibleForm((prevVisible) => !prevVisible);
  };

  return (
    <Wrapper>
      <InputFormStyled onSubmit={handleFormSubmit}>
        <TextArea placeholder="Enter a note" value={text} onChange={handleTextAreaChange} />
        <RadioBox
          values={['남주', '택훈', '진수', '삭']}
          handleRadioChange={handleRadioChange}
          status={status}
        />
        <ButtonBox>
          <AddButton type="submit" disabled={!text || !creator} transparent={!text || !creator}>
            Add
          </AddButton>
          <CancelButton type="button" onClick={handleButtonClick}>
            Cancel
          </CancelButton>
        </ButtonBox>
      </InputFormStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 12px 0;
  padding: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
`;

const InputFormStyled = styled.form``;

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  border-color: #dfdfdf;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 35px;

  button {
    width: 50%;
    height: 100%;
    border-radius: 10px;
    font-size: 15px;
  }
`;

const AddButton = styled.button<{ transparent: boolean }>`
  border: none;
  color: #edffee;
  background-color: #34a350;
  opacity: ${(props) => props.transparent && '0.6'};
`;

const CancelButton = styled.button`
  color: #24272a;
  border: 1px solid #dfdfdf;
  background-color: #fafbfd;
`;

export default InputForm;
