import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteItem, loadItems } from 'src/app.actions';
import { AppState } from 'src/app.reducer';
import { selectAll } from 'src/app.selectors';
import { Item } from 'src/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select(selectAll);
    console.log(this.items$)
  }
  ngOnInit(){
    this.store.dispatch(loadItems())
  }
  handleDelete(item:any){
    this.store.dispatch(deleteItem(item))
  }
}
