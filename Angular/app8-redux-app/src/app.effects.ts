// app.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from './data.service';
import {
  loadItems,
  loadItemsSuccess,
  addItem,
  addItemSuccess,
  updateItem,
  updateItemSuccess,
  deleteItem,
  deleteItemSuccess,
} from './app.actions';

@Injectable()
export class AppEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() => this.dataService.getItems()),
      map((items) => loadItemsSuccess({ items }))
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      mergeMap(({ item }) => this.dataService.addItem(item)),
      map((item) => addItemSuccess({ item }))
    )
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateItem),
      mergeMap(({ item }) => this.dataService.updateItem(item)),
      map((item) => updateItemSuccess({ item }))
    )
  );

    // deleteItem$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(deleteItem),
    //     mergeMap(({ id }) => this.dataService.deleteItem(id)),
    //     map(() => deleteItemSuccess({ id }))
    //   )
    // );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
