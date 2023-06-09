// app.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  loadItemsSuccess,
  addItemSuccess,
  updateItemSuccess,
  deleteItemSuccess,
} from './app.actions';
import { Item } from './item.model';

export interface AppState extends EntityState<Item> {}

export const itemAdapter = createEntityAdapter<Item>();

export const initialState: AppState = itemAdapter.getInitialState();

export const appReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => itemAdapter.setAll(items, state)),
  on(addItemSuccess, (state, { item }) => itemAdapter.addOne(item, state)),
  on(updateItemSuccess, (state, { item }) =>
    itemAdapter.updateOne({ id: item.id, changes: item }, state)
  ),
  on(deleteItemSuccess, (state, { id }) => itemAdapter.removeOne(id, state))
);
