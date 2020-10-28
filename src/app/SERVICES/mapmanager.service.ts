import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapmanagerService {

  tempPin = new BehaviorSubject<String[]>(['', '']);
  tempPinColor = new BehaviorSubject<number>(0);
  FlowMeterStatus = new BehaviorSubject<Boolean>(true);
  pinSaveEmitter = new Subject<void>();
  constructor() { }

  updateTEmpPin(latlong: String[]) {
    this.tempPin.next(latlong)
  }

  updateTempPinColor(color: number) {
    this.tempPinColor.next(color)
  }

  toggleFlowMeterPanel(isopen: Boolean) {
    this.FlowMeterStatus.next(isopen)
  }

  addPin() {
    this.pinSaveEmitter.next()
  }

  get tempPin$() {
    return this.tempPin.asObservable()
  }

  get tempPinColor$() {
    return this.tempPinColor.asObservable()
  }

  get FlowMeterStatus$() {
    return this.FlowMeterStatus.asObservable()
  }
}
