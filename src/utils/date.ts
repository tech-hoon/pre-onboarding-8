export const currentDate = (): string => {
  const date = new Date();
  return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
};
