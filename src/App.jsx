import './App.css';

import { increment, decrement, setDiff, reset } from './actions';

import ButtonGroup from './ButtonGroup';
import ShowCount from './ShowCount';
import InputRange from './InputRange';

import useSelector from './useSelector';
import useDispatch from './useDispatch';

function App() {
	const count = useSelector((state) => state.count);
	const diff = useSelector((state) => state.diff);
	const dispatch = useDispatch();

	const onIncrement = () => dispatch(increment());
	const onDecrement = () => dispatch(decrement());
	const onReset = () => dispatch(reset());

	const handleDiff = ({ target }) => dispatch(setDiff(target.valueAsNumber));

	return (
		<div className="App">
			<main className="App-main">
				<ShowCount count={count} diff={diff} />
				<InputRange handleDiff={handleDiff} diff={diff} />
				<ButtonGroup onDecrement={onDecrement} onReset={onReset} onIncrement={onIncrement} />
			</main>
		</div>
	);
}

export default App;
