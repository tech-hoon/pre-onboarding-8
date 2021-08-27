import { useState } from 'react';

interface useFormType {
  text: string;
  creator: string;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const useForm = (initialText: string): useFormType => {
  const [text, setText] = useState(initialText);
  const [creator, setCreator] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreator(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return { text, creator, handleRadioChange, handleTextAreaChange };
};
