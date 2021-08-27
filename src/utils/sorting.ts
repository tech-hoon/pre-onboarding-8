//sorting
export const sortTodoHandle = (
  a: { createdAt: string | number | Date },
  b: { createdAt: string | number | Date },
) => {
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();
  return dateB > dateA ? 1 : -1;
};
