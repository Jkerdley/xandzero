import { useEffect, useState } from 'react';
import { FieldLayout } from './FieldLayout';
import { checkWinner } from './Utils/CheckWinner';
import { store } from '../store/store';

export function Field() {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const handleCellClick = (index) => {
		const currentState = store.getState();

		if (!canMakeMove(index, currentState)) {
			return;
		}

		const newField = [...currentState.field];
		newField[index] = currentState.currentPlayer;

		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWinner(newField, currentState.currentPlayer)) {
			store.dispatch({ type: 'SET_GAME_ENDED', payload: true });
		} else {
			switchPlayer(currentState.currentPlayer);
		}

		if (isDraw(newField) && !checkWinner(newField, currentState.currentPlayer)) {
			store.dispatch({ type: 'SET_DRAW', payload: true });
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
		store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer });
	};

	return <FieldLayout field={state.field} onCellClick={handleCellClick} />;
}
