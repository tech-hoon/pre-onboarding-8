import React from 'react';
import styled from 'styled-components';

interface FormButtons {
  text: string;
  creator?: string;
  handleButtonClick: () => void;
}

const FormButtons: React.FC<FormButtons> = ({ text, creator, handleButtonClick }) => {
  const isAvailable = creator !== undefined ? !text || !creator : !text;

  return (
    <ButtonBox>
      <AddButton type="submit" disabled={isAvailable} transparent={isAvailable}>
        Add
      </AddButton>
      <CancelButton type="button" onClick={handleButtonClick}>
        Cancel
      </CancelButton>
    </ButtonBox>
  );
};

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

    :hover {
      cursor: pointer;
    }
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

export default FormButtons;
