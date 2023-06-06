import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  exchangeMessage = new BehaviorSubject(''); // Created An Instance of Behavior Subject
  constructor() {}
  receiveAndSendMessage(msg:string) { // Created a function which receives data from a Component and Send to Another Component with Behaviour Subject
    this.exchangeMessage.next(msg)
  }
}
