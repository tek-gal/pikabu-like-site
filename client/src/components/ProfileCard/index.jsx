import React from "react";
import { Row, Col } from "react-bootstrap";
import ProfilePhoto from './ProfilePhoto';
import ProfileInfo from './ProfileInfo';
import ProfileSettings from './ProfileSettings';


const ProfileCard = ({ user }) => {
  console.log(user)
  const numbers = {
    rating: user.rating,
    postCount: user.posts.length,
    commentCount: 0,
    minuses: user.minuses,
    pluses: user.pluses,
  }

  return (
    <>
      <Row>
        <Col xs={2} md={2}>
          <ProfilePhoto />
        </Col>
        <Col xs={7} md={7}>
          <ProfileInfo numbers={numbers} />
        </Col>
        <Col xs={3} md={3}>
          <ProfileSettings />
        </Col>
      </Row>
    </>
  );
};

export default ProfileCard;
