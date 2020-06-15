import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { PostsPage } from '../../pages/PostsPage';
import { PostsList } from '../../components';


const ProfileTabs = ({ user }) => {
  const { posts, likedPosts, unlikedPosts } = user;

  return (
    <Tabs defaultActiveKey="posts" id="profile__tabs">
      <Tab eventKey="posts" title="Мои посты">
        <PostsList posts={posts} likedPosts={likedPosts} unlikedPosts={unlikedPosts} />
      </Tab>
      <Tab eventKey="comments" title="Мои комментарии">
        Мои комментарии
      </Tab>
      <Tab eventKey="favorite" title="Избранное">
        Избранное
      </Tab>
    </Tabs>
  );
};

export default ProfileTabs;
