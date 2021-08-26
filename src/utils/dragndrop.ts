import React, { useState, useEffect } from 'react';
export const useDnD = () => {
  const [markupUpper, setMarkupUpper] = useState(false);
  const [enteredCardID, setEnteredCardID] = useState<string | null>(null);
  const [clickedCardID, setClickedCardID] = useState<string | null>(null);

  //Column
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const card_id = e.dataTransfer.getData('card_id');
    console.log('drop', card_id, clickedCardID);
    const currentColumn = target.closest('.cardlist');
    const clickedCard = card_id ? document.getElementById(card_id) : null;
    console.log(clickedCardID);
    if (!clickedCard) return;
    if (target === currentColumn) currentColumn.appendChild(clickedCard);
    else {
      target.insertAdjacentElement(getInsertPlace(e), clickedCard);
    }
  };

  const handleDragOverOnColumn = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const targetCard = target.closest('.card');

    //효과주기 위한 부분
    getInsertPlace(e) === 'beforebegin' ? setMarkupUpper(true) : setMarkupUpper(false);
    setEnteredCardID(targetCard ? targetCard.id : null);
  };

  const getInsertPlace = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const itemCard = target.closest('.card');
    if (!itemCard) return 'afterend';

    const placeInfo = itemCard?.getBoundingClientRect();
    const placeY = placeInfo.bottom - e.clientY;
    const targetHeight = placeInfo.bottom - placeInfo.top;
    const insertPlace = placeY > targetHeight / 2 ? 'beforebegin' : 'afterend';

    return insertPlace;
  };

  //onCard
  const [isDragStart, setDragStart] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    e.dataTransfer.setData('card', target.id);

    setClickedCardID(target.id);
    setDragStart(true);
  };

  const handleDragEnd = () => setDragStart(false);
  const showLine = (id: string) => {
    return enteredCardID === id && isDragStart;
  };

  const handleDragOverOnCard = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log('click:', clickedCardID);
    console.log('enter:', enteredCardID);
  }, [clickedCardID, enteredCardID]);
  return {
    //Column
    handleDrop,
    handleDragOverOnColumn,
    getInsertPlace,
    //Card
    handleDragStart,
    handleDragEnd,
    handleDragOverOnCard,
    showLine,
    markupUpper,
    isDragStart,
  };
};
