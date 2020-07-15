import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";
import placeholder from "../assets/placeholder.jpg";

function Shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const BuildCards = () => {
  let id = 0;
  const images = {
    image1,
    image2,
    image3,
  };
  const cards = Object.keys(images).reduce((result, key) => {
    const createCard = () => ({
      id: id++,
      type: key,
      backImg: placeholder,
      frontImg: images[key],
      flipped: true,
    });
    return [...result, createCard(), createCard()];
  }, []);
  return Shuffle(cards);
};

export default BuildCards;
