import { useEffect, useState } from 'react';
import { InformationLayout } from './InformationLayout';
import { store } from '../store/store';

export function Information() {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	return <InformationLayout currentPlayer={state.currentPlayer} isGameEnded={state.isGameEnded} isDraw={state.isDraw} />;
}
