import React, { useState, useEffect } from 'react';
import useHttp from '../hooks/http.hook';
import useMessage from '../hooks/message.hook';


export default () => {
  const [posts, setPosts] = useState([]);
  const message = useMessage();
  const { request, loading, error, clearError } = useHttp();

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

  if (loading) {
    // set loader
  }

  return (
    posts.length
      ? <h1>Posts!!!</h1>
      : <p>Постов нет</p>
  );
};
