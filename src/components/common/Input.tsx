import React from 'react';
import styled from 'styled-components';

const Input: React.FC = () => {
  return (
    <InputWrapper>
      <InputStyled />
    </InputWrapper>
  );
};

const InputWrapper = styled.div``;
const InputStyled = styled.input``;

export default Input;
