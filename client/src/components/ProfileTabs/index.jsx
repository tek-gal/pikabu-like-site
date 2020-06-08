import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';


const ProfileTabs = () => {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Мои посты">
        Мои посты
      </Tab>
      <Tab eventKey="profile" title="Мои комментарии">
        Мои комментарии
      </Tab>
      <Tab eventKey="contact" title="Избранное" disabled>
        Избранное
      </Tab>
    </Tabs>
  );
};

export default ProfileTabs;
