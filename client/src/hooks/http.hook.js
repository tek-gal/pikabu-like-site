import { useState, useCallback } from "react";

export default () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try {
      setLoading(true);

      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      const res = await fetch(url, {
        method, body, headers,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Что-то пошло не так...');
      }

      setLoading(false);

      return data;
    } catch (e) {
      setError(e.message);
      setLoading(false);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { request, loading, error, clearError };
};
