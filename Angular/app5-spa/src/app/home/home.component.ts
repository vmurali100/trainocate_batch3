import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any =[]
  constructor(private cs:CommonService,private router:Router){
    this.cs.getUsers().subscribe(res=>{
      console.log(res)
      this.users = res;
    })
  }

  goToAbout(){
    this.router.navigate(['/about'],{ state: { users: this.users } } )
  }
}
