import { FieldLayout } from './FieldLayout';
import { checkWinner } from './Utils/CheckWinner';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DRAW, setField, SET_GAME_ENDED, setCurrentPlayer } from '../actions';

export function Field() {
	const currentState = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleCellClick = (index) => {
		if (!canMakeMove(index, currentState)) {
			return;
		}

		const newField = [...currentState.field];
		newField[index] = currentState.currentPlayer;

		dispatch(setField(newField));

		if (checkWinner(newField, currentState.currentPlayer)) {
			dispatch(SET_GAME_ENDED);
		} else {
			switchPlayer(currentState.currentPlayer);
		}

		if (isDraw(newField) && !checkWinner(newField, currentState.currentPlayer)) {
			dispatch(SET_DRAW);
			return;
		}
	};

	const canMakeMove = (index, currentState) => {
		return currentState.field[index] === '' && !currentState.isGameEnded;
	};

	const isDraw = (newField) => {
		return newField.every((cell) => cell !== '');
	};

	const switchPlayer = (currentPlayer) => {
		const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
		dispatch(setCurrentPlayer(nextPlayer));
	};

	return <FieldLayout field={currentState.field} onCellClick={handleCellClick} />;
}
