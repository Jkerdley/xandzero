import React from 'react';
import { Information } from './Information';
import { Field } from './Field';
import styles from './FieldLayout.module.css';

export function GameLayout(props) {
	const { currentPlayer, isGameEnded, isDraw, field, setField, setCurrentPlayer, setIsGameEnded, setIsDraw, restartGame } = props;

	return (
		<div className={styles.game}>
			<div className={styles.infoContainer}>
				<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
				<button onClick={restartGame}>Начать заново</button>
			</div>
			<Field
				field={field}
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			/>
		</div>
	);
}
