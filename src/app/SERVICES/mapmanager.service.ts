import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapmanagerService {

  tempPin = new BehaviorSubject<String[]>(['', '']);
  FlowMeterStatus = new BehaviorSubject<Boolean>(true);
  constructor() { }

  updateTEmpPin(latlong: String[]) {
    this.tempPin.next(latlong)
  }

  get tempPin$() {
    return this.tempPin.asObservable()
  }

  get FlowMeterStatus$() {
    return this.FlowMeterStatus.asObservable()
  }

  toggleFlowMeterPanel(isopen: Boolean) {
    this.FlowMeterStatus.next(isopen)
  }
}
