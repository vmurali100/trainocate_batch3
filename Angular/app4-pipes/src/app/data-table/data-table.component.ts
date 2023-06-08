import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input() tableDetails = [];
  @Input() userSearchInput:string ="";

  constructor() {
    console.log(this.userSearchInput)
  }
  
  convertTableRow(obj: any, isHeader: boolean) {
    if (isHeader) {
      return Object.keys(obj);
    } else {
      return Object.values(obj);
    }
  }
}
