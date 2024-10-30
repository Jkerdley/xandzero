import React, { useState } from 'react';
import { GameLayout } from './GameLayout';

export function Game() {
	let array = Array(9).fill('');
	const [field, setField] = useState(array);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const restartGame = () => {
		setField(array);
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			setField={setField}
			setCurrentPlayer={setCurrentPlayer}
			setIsGameEnded={setIsGameEnded}
			setIsDraw={setIsDraw}
			restartGame={restartGame}
		/>
	);
}
