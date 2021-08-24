import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Form: React.FC = () => {
  return (
    <Wrapper>
      <FormStyled>
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
