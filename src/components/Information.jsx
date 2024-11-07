import { InformationLayout } from './InformationLayout';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../selectors';

export function Information() {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />;
}
