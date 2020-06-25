import React from "react";
import styled from "@emotion/styled";

const Card = (props) => {
  let Card = styled.div`
    flex: 1;
    border-style: solid;
    margin: auto;
  `;
  let Pic = styled.img`
    // margin: 20px 20px 20px 20px;
    width: 250px;
    height: 250px;
  `;
  const { frontImg, backImg, flipped, onClick } = props;
  const img = flipped ? frontImg : backImg;
  return (
    <Card onClick={onClick}>
      <Pic src={img} alt="" />
    </Card>
  );
};

export default Card;
