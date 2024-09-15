import React from 'react';
import styles from './FieldLayout.module.css';

export function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
	let status = isDraw ? 'Ничья!' : isGameEnded ? `Победа: ${currentPlayer}` : `Ходит: ${currentPlayer}`;

	return <div className={styles.information}>{status}</div>;
}
