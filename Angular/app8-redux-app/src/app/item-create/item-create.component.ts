import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app.actions';
import { Item } from 'src/item.model';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  name: string=""

  constructor(private store: Store) {}

  addItem() {
    const item: Item = {
      id: '', // Generate a unique ID, or your API might handle ID generation
      name: this.name,
      // Add other properties as needed
    };
    this.store.dispatch(addItem({ item }));
    this.name = '';
  }
}
