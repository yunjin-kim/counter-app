import useStore from './useStore';

const useSelector = (selector = (state) => state) => selector(useStore().getState());

export default useSelector;
