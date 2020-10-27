import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MapmanagerService } from '../SERVICES/mapmanager.service';

@Component({
  selector: 'app-flow-meter',
  templateUrl: './flow-meter.component.html',
  styleUrls: ['./flow-meter.component.scss']
})
export class FlowMeterComponent implements OnInit {

  flow_Form: FormGroup;
  tempPin: String[]

  options = [
    ['Przepływ nieznany', 0],
    ['Przepływ - SUW/ZUW', 1],
    ['Przepływ - Zbiornik', 2],
    ['Przepływ międzystrefowy', 3],
    ['Sprzedaż - Online', 4],
    ['Sprzedaż - odczyt co 12h', 5],
    ['Sprzedaż - odczyt ręczny', 6],
    ['Przepływ wirtualny', 7],
  ]

  constructor(
    private mapManagerSV: MapmanagerService
  ) {
    this.mapManagerSV.tempPin$.subscribe(tempPin => this.tempPin = tempPin)
  }

  ngOnInit(): void {
    this.showForm()

    this.flow_Form = new FormGroup({
      name: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required]
      }),
      type: new FormControl(null, {
        updateOn: "change",
        validators: [
          Validators.required,
        ]
      }),
      value: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required]
      }),
      lat: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required]
      }),
      long: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required]
      })
    });
  }

  showForm() {
    document.querySelector('.panel').classList.add('show')
    this.mapManagerSV.toggleFlowMeterPanel(true)
  }

  hideForm() {
    document.querySelector('.panel').classList.remove('show')
    this.mapManagerSV.toggleFlowMeterPanel(false)
  }

  updatelatLong() {
    let lat = this.flow_Form.value['lat']
    let long = this.flow_Form.value['long']
    if (lat && long)
      this.mapManagerSV.updateTEmpPin([lat, long])
  }

  confirm() {

  }



}
