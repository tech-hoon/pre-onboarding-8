import React, { useState } from 'react';
import styled from 'styled-components';
import CreatorModal from './FilterModal';

interface DropDownProps {
  onCheckedHandler: (checked: boolean, id: number) => void;
  selectCreator: any[];
}

const DropDown: React.FC<DropDownProps> = ({
  onCheckedHandler,
  selectCreator,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalClick = () => setModalOpen(!modalOpen);

  return (
    <FilterOptions>
      <Value>생성일</Value>
      <Value onClick={handleModalClick}>생성자</Value>
      {modalOpen && (
        <CreatorModal
          onCheckedHandler={onCheckedHandler}
          selectCreator={selectCreator}
        />
      )}
    </FilterOptions>
  );
};

export default DropDown;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid #333;
  margin-top: 12px;
  width: 100px;
  right: 0;
  gap: 10px 0;
  background-color: #fff;
  text-align: center;
`;

const Value = styled.span`
  padding: 5px 0;

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
`;
