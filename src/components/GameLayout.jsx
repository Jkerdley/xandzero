import React from 'react';
import PropTypes from 'prop-types';
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

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.arrayOf(PropTypes.string),
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	restartGame: PropTypes.func,
};
