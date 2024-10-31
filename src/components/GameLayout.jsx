import PropTypes from 'prop-types';
import { Information } from './Information';
import { Field } from './Field';
import styles from './Styles/FieldLayout.module.css';

export function GameLayout({ restartGame }) {
	return (
		<div className={styles.game}>
			<div className={styles.infoContainer}>
				<Information />
				<button onClick={restartGame}>Начать заново</button>
			</div>
			<Field />
		</div>
	);
}

GameLayout.propTypes = {
	restartGame: PropTypes.func.isRequired,
};
