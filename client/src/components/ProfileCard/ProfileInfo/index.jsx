import React, { useContext } from "react";
import InfoTable from './InfoTable';
import AuthContext from '../../../context/AuthContext';


export default () => {
  const { nickname, registrationDate } = useContext(AuthContext);

  return (
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>{nickname}</h2>
        <small>{registrationDate}</small>
        <InfoTable />
    </div>
  );
};
