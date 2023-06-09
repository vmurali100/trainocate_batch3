import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadStudentsSuccess } from './student.actions';
const initialState: any = [];

export const itemAdapter = createEntityAdapter(); //.{students}
export const studentsReducer = createReducer(
  initialState,
  on(loadStudentsSuccess, (state, { students }) =>
    itemAdapter.setAll(students, state)
  )
);

