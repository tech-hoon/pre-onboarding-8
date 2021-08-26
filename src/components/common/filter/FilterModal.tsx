import React from 'react';
import styled from 'styled-components';
import { CREATOR_NAME } from 'utils/config';
import { MdClose } from 'react-icons/md';
interface DropDownProps {
  creatorChecked: (checked: boolean, value: string) => void;
  selectCreator: (string | number)[];
  close: () => void;
  val: (value: any) => void;
}

const Modal: React.FC<DropDownProps> = ({ creatorChecked, selectCreator, close, val }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //close();
    val(selectCreator);
  };

  return (
    <Wrapper>
      <Container onSubmit={onSubmit}>
        <Header>
          <h2>생성자 필터 선택</h2>
          <MdClose onClick={close} />
        </Header>
        <Content>
          {CREATOR_NAME.map((name, index) => (
            <div key={index}>
              <Input
                type="checkbox"
                name={name}
                checked={selectCreator.includes(name) ? true : false}
                onChange={(e) => creatorChecked(e.currentTarget.checked, name)}
              />
              <label htmlFor={name}>{name}</label>
            </div>
          ))}
        </Content>
        <ResultBox>
          <ResultButton>확인</ResultButton>
        </ResultBox>
      </Container>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.form`
  width: 400px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  h2 {
    font-weight: bold;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2rem;
`;

const Input = styled.input`
  cursor: pointer;
`;

const ResultBox = styled.div`
  margin-bottom: 0.4rem;
`;

const ResultButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.6rem 2.6rem;
`;
