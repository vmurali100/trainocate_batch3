import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent {
  constructor(private route:ActivatedRoute){
    this.route.paramMap.subscribe((res:any)=>{
      console.log(res['params'])
    })
  }
}
