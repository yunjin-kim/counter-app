import { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';

const useStore = () => {
  return useContext(ReactReduxContext);
};

export default useStore;
