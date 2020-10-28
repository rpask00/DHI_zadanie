import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapmanagerService {

  tempPin = new BehaviorSubject<String[]>(['', '']);
  tempPinColor = new BehaviorSubject<number>(0);
  pinSaveEmitter = new Subject<void>();
  clearFormEmitter = new Subject<void>();
  constructor() { }

  updateTEmpPin(latlong: String[]) {
    this.tempPin.next(latlong)
  }

  updateTempPinColor(color: number) {
    this.tempPinColor.next(color)
  }

 

  addPin() {
    this.pinSaveEmitter.next()
  }

  removeTempin() {
    this.clearFormEmitter.next()
  }

  get tempPin$() {
    return this.tempPin.asObservable()
  }

  get tempPinColor$() {
    return this.tempPinColor.asObservable()
  }
}
