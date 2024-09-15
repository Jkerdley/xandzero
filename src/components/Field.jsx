import React from 'react';
import { FieldLayout } from './FieldLayout';

export function Field(props) {
	const { field, currentPlayer, isGameEnded, setField, setCurrentPlayer, setIsGameEnded, setIsDraw } = props;

	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		if (checkWinner(newField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (newField.every((cell) => cell !== '')) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		}
	};

	const checkWinner = (field, player) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Горизонтальные
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Вертикальные
			[0, 4, 8],
			[2, 4, 6], // Диагонали
		];

		return WIN_PATTERNS.some((pattern) => pattern.every((index) => field[index] === player));
	};

	return <FieldLayout field={field} onCellClick={handleCellClick} />;
}
