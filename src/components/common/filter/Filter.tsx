import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import { FilterDropDown } from 'components';
import { TodoTypes } from 'components/todos/TodoTypes';

interface DropDownProps {
  status: string;
  todoItems: TodoTypes[];
  dropOpen: boolean;
  selectCreator: string[];
  filterOpen: () => void;
  creatorChecked: (checked: boolean, value: string) => void;
  handleTodoSort: (status: string) => void;
  selectFilter: { date: boolean; creator: boolean };
  setSelectFilter: Dispatch<SetStateAction<{ date: boolean; creator: boolean }>>;
}

const Filter: React.FC<DropDownProps> = ({
  status,
  dropOpen,
  filterOpen,
  creatorChecked,
  selectCreator,
  handleTodoSort,
  selectFilter,
  setSelectFilter,
}) => {
  const handleSelectColor = (status: string) => {
    if (selectFilter.date || selectFilter.creator) {
      if (status === '할 일') return `rgba(255, 0, 25, 0.414)`;
      else if (status === '진행 중') return `rgba(234, 167, 0, 0.386)`;
      else return `rgba(9, 116, 95, 0.469)`;
    } else {
      return 'black';
    }
  };

  return (
    <Wrapper>
      <Button onClick={filterOpen}>
        <MdFilterList size={24} color={handleSelectColor(status)} />
      </Button>
      {dropOpen && (
        <FilterDropDown
          {...{ status, creatorChecked, selectCreator, handleTodoSort, setSelectFilter }}
          filterClose={filterOpen}
          setSelectFilter={setSelectFilter}
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

const Button = styled.button`
  &:hover {
    transform: scale(1.2);
  }
`;
