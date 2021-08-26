import { TodoTypes } from 'components';

export const currentId = (items: TodoTypes[]): number => {
  const maxId = Math.max(...items.map((item: TodoTypes) => item.id));

  return maxId + 1;
};
