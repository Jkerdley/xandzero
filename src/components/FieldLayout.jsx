import styles from './Styles/FieldLayout.module.css';

export function FieldLayout({ field, onCellClick }) {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button key={index} className={styles.cell} onClick={() => onCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	);
}
