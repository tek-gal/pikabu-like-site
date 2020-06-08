import React from "react";
import { Row, Col } from "react-bootstrap";
import ProfilePhoto from './ProfilePhoto';
import ProfileInfo from './ProfileInfo';
import ProfileSettings from './ProfileSettings';


const ProfileCard = () => {
  return (
    <>
      <Row>
        <Col xs={3} md={3}>
          <ProfilePhoto />
        </Col>
        <Col xs={6} md={6}>
          <ProfileInfo />
        </Col>
        <Col xs={3} md={3}>
          <ProfileSettings />
        </Col>
      </Row>
    </>
  );
};

export default ProfileCard;
