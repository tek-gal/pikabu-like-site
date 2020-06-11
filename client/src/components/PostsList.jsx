import React from 'react';
import { PostCard } from '../components';


export default ({ posts }) => {
  return (
    posts.length
      ? posts.map((post) => <PostCard key={post._id} post={post} linkActive={true} />)
      : <p>Постов нет</p>
  );
};
