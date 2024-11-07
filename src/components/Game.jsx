import { useCallback } from 'react';
import { GameLayout } from './GameLayout';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from '../actions';

export function Game() {
	const dispatch = useDispatch();
	const restartGame = useCallback(() => {
		dispatch(RESTART_GAME);
	}, [dispatch]);

	return <GameLayout restartGame={restartGame} />;
}
