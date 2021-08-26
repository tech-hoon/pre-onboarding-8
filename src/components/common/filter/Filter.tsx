import React from 'react';
import styled from 'styled-components';
import { MdFilterList } from 'react-icons/md';
import FilterDropDown from './FilterDropDown';
import { TodoTypes } from 'components/todos/TodoTypes';

interface DropDownProps {
  dropOpen: boolean;
  selectCreator: (string | number)[];
  filterOpen: () => void;
  creatorChecked: (checked: boolean, value: string) => void;
  todoItems: TodoTypes[];
  val: (value: any) => void;
  sortTodo: (
    a: { createdAt: string | number | Date },
    b: { createdAt: string | number | Date },
  ) => number;
}

const Filter: React.FC<DropDownProps> = ({
  dropOpen,
  filterOpen,
  creatorChecked,
  selectCreator,
  todoItems,
  val,
  sortTodo,
}) => {
  return (
    <Wrapper>
      <MdFilterList size={24} onClick={filterOpen} />
      {dropOpen && (
        <FilterDropDown
          creatorChecked={creatorChecked}
          selectCreator={selectCreator}
          todoItems={todoItems}
          val={val}
          sortTodo={sortTodo}
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
