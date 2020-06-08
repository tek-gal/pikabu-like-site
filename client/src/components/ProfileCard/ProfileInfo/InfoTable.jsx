import React from "react";
import { ListGroup } from "react-bootstrap";


const createItem = (title, value) => {
  const listItemStyle = {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center'
  };
  return (
    <ListGroup.Item style={listItemStyle}>
      <strong>{title}</strong>
      <p style={{ paddingTop: "1rem" }}>{value}</p>
    </ListGroup.Item>
  );
};

const InfoTable = () => {
  return (
    <ListGroup horizontal style={{ paddingTop: "1rem" }}>
      {createItem('Рейтинг', 10)}
      {createItem('Постов', 0)}
      {createItem('Комментариев', 15)}
    </ListGroup>
  );
};

export default InfoTable;
