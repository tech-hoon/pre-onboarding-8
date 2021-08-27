import React from 'react';
import styled from 'styled-components';

interface RadioProps {
  value: string;
  status: string;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ value, status, handleRadioChange }): JSX.Element => {
  return (
    <RadioWrapper>
      <InputStyled
        type="radio"
        name={status}
        id={value + status}
        value={value}
        onChange={handleRadioChange}
      />
      <LabelStyled htmlFor={value + status}>{value}</LabelStyled>
    </RadioWrapper>
  );
};

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyled = styled.input`
  appearance: none;
  margin: 0 10px 2px 0;
  width: 15px;
  height: 15px;
  border: 1px solid #dfdfdf;
  border-radius: 0;

  :checked {
    background: green;
    border: none;
    border-radius: 0;
  }

  :hover {
    cursor: pointer;
  }
`;

const LabelStyled = styled.label`
  color: #24272a;
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`;

export default Radio;
