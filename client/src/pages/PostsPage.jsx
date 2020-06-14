import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/http.hook';
import useMessage from '../hooks/message.hook';
import { PostCard, PostsList } from '../components';


export default () => {
  const [posts, setPosts] = useState(null);
  const message = useMessage();
  const { request, error, clearError } = useHttp();

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, message, error]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const { posts } = await request('/posts');
        setPosts(posts);
      } catch (e) {}
    };
    loadPosts();
  }, [request]);

  if (!posts) {
    return null;
  }

  return (
    <PostsList posts={posts} />
  );
};
