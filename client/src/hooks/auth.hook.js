import { useEffect, useState, useCallback } from 'react';

const positionName = 'userData';

export default () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [registrationDate, setRegistrationDate] = useState(null);
  const [ready, setReady] = useState(false);

  const login = useCallback((userData) => {
    const { token, userId, nickname, registrationDate } = userData;
    localStorage.setItem(
      positionName,
      JSON.stringify({ token, userId, nickname, registrationDate }),
    );
    setToken(token);
    setUserId(userId);
    setNickname(nickname);
    setRegistrationDate(registrationDate);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(positionName);
    setToken(null);
    setUserId(null);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(positionName));

    if (userData && userData.token) {
      login(userData);
      setReady(true);
    }
  }, [login]);

  return { login, logout, token, userId, ready, nickname, registrationDate, };
};
