import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";
import BuildCards from "./gameSetUp";
import styled from "@emotion/styled";

const CardGame = () => {
  let Board = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  `;

  const [cards, setCards] = useState(BuildCards());
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);
  const renderCard = (card) => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cards.map((card) => ({
      ...card,
      flipped:
        checkers.find((c) => c.id === card.id) || completed.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, completed]);

  return (
    <div className="Game">
      <Board>
        {cards.map((card) => (
          <Card {...card} onClick={renderCard(card)} key={card.id} />
        ))}
      </Board>
    </div>
  );
};

export default CardGame;
