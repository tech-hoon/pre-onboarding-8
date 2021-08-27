import { Dispatch, SetStateAction, useState } from 'react';

export const useForm = () => {
  const [text, setText] = useState('');
  const [creator, setCreator] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreator(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  //   const handleButtonClick = (setIsVisibleForm: Dispatch<SetStateAction<boolean>>) => {
  //     setIsVisibleForm((prevVisible) => !prevVisible);
  //   };

  return { text, creator, handleRadioChange, handleTextAreaChange };
};
