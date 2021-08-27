import React from 'react';
import styled from 'styled-components';
import { Radio } from 'components';

interface RadioBoxProps {
  values: string[];
  status: string;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioBox: React.FC<RadioBoxProps> = ({ values, status, handleRadioChange }): JSX.Element => {
  return (
    <RadioBoxWrapper>
      {values.map((value: string, index: number) => (
        <Radio key={index} value={value} status={status} handleRadioChange={handleRadioChange} />
      ))}
    </RadioBoxWrapper>
  );
};

const RadioBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
`;

export default RadioBox;
