import { TodoTypes } from 'components';
export const getCardIndex = (items: TodoTypes[], id: number) => {
  console.log(items, id);
  return items
    .map((item, index) => {
      if (item.id === id) return index;
    })
    .filter((item) => item)[0];
};

export const getInsertPlace = (e: React.DragEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;
  const itemCard = target.closest('.card');
  if (!itemCard) return 'afterend';

  const placeInfo = itemCard?.getBoundingClientRect();
  const placeY = placeInfo.bottom - e.clientY;
  const targetHeight = placeInfo.bottom - placeInfo.top;
  const insertPlace = placeY > targetHeight / 2 ? 'beforebegin' : 'afterend';

  return insertPlace;
};

export const appendChild = (items: TodoTypes[], status: string, card: TodoTypes) => {
  //해당상태 내 마지막 아이템
  const lastItemIndex = (status: string) => {
    const sameStatusArr = items.filter((item) => item.status === status);
    const lastItem = sameStatusArr[sameStatusArr.length - 1];
    return items.indexOf(lastItem);
  };
  //기존카드는 삭제
  const originCardIndex = getCardIndex(items, card.id);
  if (originCardIndex) items.splice(originCardIndex, 1);
  //card의 상태 변경
  card.status = status;
  //해당 인덱스에 새로운 카드 삽입
  items.splice(lastItemIndex(status) + 1, 0, card);
  return items;
};

export const insertChild = (
  items: TodoTypes[],
  status: string,
  card: TodoTypes,
  insertPosiiton: string,
  currentCardID: number,
): TodoTypes[] => {
  //기존카드는 삭제
  const originCardIndex = getCardIndex(items, card.id);
  if (originCardIndex) items.splice(originCardIndex, 1);
  //card의 상태 변경
  card.status = status;
  //target카드의 인덱스 확인
  const dropPositionCardIndex = getCardIndex(items, currentCardID) || -1; //<-수정해야할부분
  dropPositionCardIndex >= 0 && insertPosiiton === 'beforebegin'
    ? items.splice(dropPositionCardIndex, 0, card)
    : items.splice(dropPositionCardIndex + 1, 0, card);
  return items;
};
