import React from "react";
import { ListGroup } from "react-bootstrap";

const createItem = (title, value) => {
  const listItemStyle = {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "space-between",
  };

  return (
    <ListGroup.Item style={listItemStyle}>
      <strong>{title}</strong>
      <p style={{ paddingTop: "1rem" }}>{value}</p>
    </ListGroup.Item>
  );
};

const InfoTable = ({ numbers }) => {
  const { rating, postCount, commentCount, minuses, pluses } = numbers;
  return (
    <ListGroup horizontal style={{ paddingTop: "1rem" }}>
      {createItem('Рейтинг', rating)}
      {createItem('Постов', postCount)}
      {createItem('Комментариев', commentCount)}
      {createItem('Минусов', minuses)}
      {createItem('Плюсов', pluses)}
    </ListGroup>
  );
};

export default InfoTable;
