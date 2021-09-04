import { useState, useCallback } from 'react';
 
/** 強制再レンダリング **/
export const UseForceUpdate = () => {
  const [, forceUpdate] = useState<undefined | boolean>(undefined);
  return useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
};