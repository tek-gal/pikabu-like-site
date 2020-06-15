import React from 'react';
import { PostCard } from '../components';


export default ({ posts, likedPosts, unlikedPosts }) => {
  console.log(likedPosts, unlikedPosts)

  return (
    posts.length
      ? posts.map((post) => {
        const relation = likedPosts.includes(post._id)
          ? 'like'
          : unlikedPosts.includes(post._id)
              ? 'dislike'
              : null;
        console.log(relation)
        return (
          <PostCard
            key={post._id}
            post={post}
            linkActive={true}
            relation={relation}
          />
        );
      })
      : <p>Постов нет</p>
  );
};
