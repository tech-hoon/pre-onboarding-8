import React from 'react';
import styled from 'styled-components';

const dummyData = ['남주', '택훈', '진수', '삭'];

interface DropDownProps {
  onCheckedHandler: (checked: boolean, id: number) => void;
  selectCreator: any[];
}

const Modal: React.FC<DropDownProps> = ({
  onCheckedHandler,
  selectCreator,
}) => {
  return (
    <Wrapper>
      <Container>
        <h2>생성자 필터 선택</h2>
        <NameBox>
          {dummyData.map((name, i) => (
            <div key={i}>
              <Input
                type="checkbox"
                name={name}
                checked={selectCreator.includes(i) ? true : false}
                onChange={(e) => onCheckedHandler(e.currentTarget.checked, i)}
              />
              <label>{name}</label>
            </div>
          ))}
        </NameBox>
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
  width: 500px;
  height: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
`;

const Input = styled.input`
  cursor: pointer;
`;

const ResultBox = styled.div`
  margin-bottom: 1rem;
`;

const ResultButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.6rem 2.6rem;
`;
