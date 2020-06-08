import { useCallback } from 'react';
import { toast } from 'react-toastify'

export default () => {
  return useCallback((text) => {
    toast(text);
  }, []);
};
