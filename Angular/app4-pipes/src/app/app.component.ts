import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  famousQuotes: any = [];
  exchangeDetails: any = [];
  randomData: any = [];
  userSearch = '';
  // quotsHeader=["quote","author","category"]
  constructor(private cs: CommonService) {
    this.cs.getEchangeRates().subscribe((res: any) => {
      console.log(res.exchange_rates);

      this.exchangeDetails = res.exchange_rates.map((obj: any) => obj);
    });

    this.cs.getQuotesByFamousPeopls().subscribe((res) => {
      console.log(res);
      this.famousQuotes = res;
    });

    this.randomData = randomData;
  }
  title = 'app4-pipes';
}

const randomData = [
  {
    fname: 'Danielle',
    lname: 'Roethlisberger',
    tel: '(705)820-1827',
    address: '9180 Nunc St',
    city: 'Bremen',
    state: 'NE',
    zip: 91398,
    date: '2039-10-16T16:56:10.377Z',
  },
  {
    fname: 'Carman',
    lname: 'Abdurrahman',
    tel: '(801)643-4433',
    address: '7968 Mi Ct',
    city: 'Patterson',
    state: 'NH',
    zip: 70562,
    date: '1965-11-06T22:10:08.802Z',
  },
  {
    fname: 'Aydin',
    lname: 'Barron',
    tel: '(169)444-4359',
    address: '310 Consequat Rd',
    city: 'Villa Rica',
    state: 'IN',
    zip: 92214,
    date: '2060-09-25T11:55:44.762Z',
  },
  {
    fname: 'Jon',
    lname: 'Dellabadia',
    tel: '(535)319-6492',
    address: '8368 Sed Dr',
    city: 'Boynton Beach',
    state: 'KY',
    zip: 66352,
    date: '1927-09-06T19:54:08.930Z',
  },
  {
    fname: 'Angelina',
    lname: 'Katz',
    tel: '(379)550-8699',
    address: '9494 Amet Dr',
    city: 'Carolina Beach',
    state: 'KS',
    zip: 60115,
    date: '1914-06-15T10:24:22.945Z',
  },
  {
    fname: 'Xiumei',
    lname: 'Red',
    tel: '(442)765-2155',
    address: '9682 Nullam Dr',
    city: 'Elmwood Park',
    state: 'OK',
    zip: 15058,
    date: '2087-05-25T17:37:27.383Z',
  },
  {
    fname: 'Vonnie',
    lname: 'Hampton',
    tel: '(389)506-5880',
    address: '7546 Mi Ave',
    city: 'Birmingham',
    state: 'MO',
    zip: 30299,
    date: '2090-03-25T09:20:18.878Z',
  },
  {
    fname: 'Jeff',
    lname: 'Brinker',
    tel: '(362)234-6656',
    address: '7331 Sit St',
    city: 'Arvada',
    state: 'MI',
    zip: 70253,
    date: '1988-03-17T01:02:16.557Z',
  },
  {
    fname: 'Alexandra',
    lname: 'Donaldson',
    tel: '(286)958-0213',
    address: '8896 Dolor Ave',
    city: 'Paducah',
    state: 'OK',
    zip: 35172,
    date: '2051-03-11T20:40:41.084Z',
  },
  {
    fname: 'Candelaria',
    lname: 'Tuttle',
    tel: '(799)918-5862',
    address: '6996 Mi Ln',
    city: 'Kansas City',
    state: 'WY',
    zip: 55891,
    date: '1905-08-04T04:29:40.944Z',
  },
];
