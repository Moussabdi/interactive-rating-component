import React from "react";
import "./Card.css";
import Container from "../container/container";

const Card = (props) => {
  return <Container className="Card">{props.children}</Container>;
};

export default Card;
