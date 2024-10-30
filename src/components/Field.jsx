import React from 'react';
import { FieldLayout } from './FieldLayout';
import { checkWinner } from './Utils/CheckWinner';


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

	checkWinner(field, currentPlayer);

	return <FieldLayout field={field} onCellClick={handleCellClick} />;
}
