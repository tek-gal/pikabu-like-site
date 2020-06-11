import React, { useState, useContext, useEffect } from "react";
import { ProfileCard, ProfileTabs } from '../components';
import AuthContext from '../context/AuthContext';
import useHttp from '../hooks/http.hook';


export default () => {
  const [user, setUser] = useState(null);
  const { request } = useHttp();
  const { userId } = useContext(AuthContext);
  useEffect(() => {
    request(`user/${userId}`, 'GET')
      .then((res) => setUser(res.user));
  }, [request, userId]);

  if (!user) return 'Loading...';
  
  return (
    <>
        <ProfileCard user={user} />
        <br/>
        <br/>
        <ProfileTabs user={user} />
    </>
  );
};
