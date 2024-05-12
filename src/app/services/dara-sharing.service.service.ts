import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaraSharingServiceService {
  prop: boolean = false;
  propObservable = new BehaviorSubject(this.prop);
  constructor() { }

  getData() {
    return this.prop;
  }

  getAsyncData() {
    return this.propObservable.asObservable();
  }

  setData(newData: boolean) {
    this.prop = newData;
  }

  setAsyncData(newData: boolean) {
    this.propObservable.next(newData);
  }
}
