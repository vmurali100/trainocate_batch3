import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { loadStudents, loadStudentsSuccess } from './student.actions';
import { StudentService } from './student.service';

export class StudentEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStudents),
      mergeMap(() => {
        console.log("studentService Called !!")
        return this.studentService.getStudets()
      }),
      map((studetns: any) => loadStudentsSuccess(studetns))
    )
  );
}
