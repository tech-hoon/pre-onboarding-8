export const getInsertPlace = (currentCard: Element | null, y: number): string => {
  if (!currentCard) return 'afterend';
  const placeInfo = currentCard.getBoundingClientRect();
  const placeY = placeInfo.bottom - y;
  const targetHeight = placeInfo.bottom - placeInfo.top;
  const insertPlace = placeY > targetHeight / 2 ? 'beforebegin' : 'afterend';

  return insertPlace;
};
