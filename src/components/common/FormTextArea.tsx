import React from 'react';
import styled from 'styled-components';

interface FormTextArea {
  placeholder: string;
  text: string;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<FormTextArea> = ({ placeholder, text, handleTextAreaChange }) => {
  return <TextArea placeholder={placeholder} value={text} onChange={handleTextAreaChange} />;
};

const TextArea = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 10px;
  border-color: #dfdfdf;
`;

export default FormTextArea;
