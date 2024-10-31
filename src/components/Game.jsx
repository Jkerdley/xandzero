import { useCallback } from 'react';
import { GameLayout } from './GameLayout';
import { store } from '../store/store';

export function Game() {
	const restartGame = useCallback(() => {
		store.dispatch({ type: 'RESTART_GAME' });
	}, []);

	return <GameLayout restartGame={restartGame} />;
}
