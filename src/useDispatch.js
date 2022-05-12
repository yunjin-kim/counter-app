import useStore from './useStore';

const useDispatch = () => useStore().dispatch;

export default useDispatch;
