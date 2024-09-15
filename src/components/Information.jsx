import React from 'react';
import { InformationLayout } from './InformationLayout';

export function Information({ currentPlayer, isGameEnded, isDraw }) {
	return <InformationLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />;
}
