import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mainUsers:any = {}
  constructor(private router:Router){
    this.mainUsers = this.router.getCurrentNavigation()?.extras.state
    console.log(this.mainUsers['users'])
  }
}
