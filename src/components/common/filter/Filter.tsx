import React from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import FilterDropDown from './FilterDropDown';

interface DropDownProps {
  dropOpen: boolean;
  selectCreator: any[];
  handleOpenClick: () => void;
  onCheckedHandler: (checked: boolean, id: number) => void;
}

const Filter: React.FC<DropDownProps> = ({
  dropOpen,
  handleOpenClick,
  onCheckedHandler,
  selectCreator,
}) => {
  return (
    <Wrapper>
      <MdFilterList size={24} onClick={handleOpenClick} />
      {dropOpen && (
        <FilterDropDown
          onCheckedHandler={onCheckedHandler}
          selectCreator={selectCreator}
        />
      )}
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  text-align: right;
  cursor: pointer;
  position: relative;
`;
