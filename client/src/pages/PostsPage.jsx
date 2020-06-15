import React, { useState, useEffect, useContext, useCallback } from 'react';
import useHttp from '../hooks/http.hook';
import useMessage from '../hooks/message.hook';
import { PostsList } from '../components';
import AuthContext from '../context/AuthContext';


export default () => {
  const [posts, setPosts] = useState(null);
  const message = useMessage();
  const { request, error, clearError } = useHttp();
  const [user, setUser] = useState(null);
  const { isAuthenticated, userId } = useContext(AuthContext);

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, message, error]);
  const loadPosts = useCallback(async () => {
    try {
      const { posts } = await request('/posts');
      setPosts(posts);

      if (isAuthenticated) {
        const { user } = await request(`user/${userId}`, 'GET');
        setUser(user);
      };

    } catch (e) {}
  }, [request, isAuthenticated, userId]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const hasUser = isAuthenticated ? isAuthenticated && user : true;

  if (!posts || !hasUser) {
    return null;
  }

  const likedPosts = user ? user.likedPosts : [];
  const unlikedPosts = user ? user.unlikedPosts : [];

  return (
    <PostsList posts={posts} likedPosts={likedPosts} unlikedPosts={unlikedPosts} />
  );
};
