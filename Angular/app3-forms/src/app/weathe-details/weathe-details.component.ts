import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weathe-details',
  templateUrl: './weathe-details.component.html',
  styleUrls: ['./weathe-details.component.css']
})
export class WeatheDetailsComponent {
  constructor(private ws:WeatherService){
    this.ws.getRealTimeWeather().subscribe(res=>{
      console.log(res)
    })

    this.ws.getForeCastDetails().subscribe(res=>{
      console.log(res)
    })

    this.ws.getJsonPlaceHolderUsers().subscribe((res)=>{
      console.log(res)
    })
  }
}
