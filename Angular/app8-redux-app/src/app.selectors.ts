import { createFeatureSelector, createSelector } from '@ngrx/store';
import { itemAdapter, AppState } from './app.reducer';

// Select the feature state
export const selectAppState = createFeatureSelector<AppState>('app');

// Select the entities and convert them to an array
export const selectAll = createSelector(selectAppState, itemAdapter.getSelectors().selectAll);
