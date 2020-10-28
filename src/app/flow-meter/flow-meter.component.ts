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
  latlong: String

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
  ) { }

  ngOnInit(): void {
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



    this.mapManagerSV.tempPin$.subscribe(tempPin => {
      this.flow_Form.controls['lat'].setValue(tempPin[0])
      this.flow_Form.controls['long'].setValue(tempPin[1])
    })

    this.flow_Form.valueChanges.subscribe(value => {
      let ll = value.lat + '_' + value.long
      if (ll != this.latlong) {
        this.latlong = ll
        this.updatelatLong()

      }
    })
  }

  showForm() {
    document.querySelector('.panel').classList.add('show')
    document.querySelector('.wrapper').classList.add('wrappershow')
  }

  hideForm() {
    document.querySelector('.panel').classList.remove('show')
    document.querySelector('.wrapper').classList.remove('wrappershow')
  }

  updatelatLong() {
    let lat = this.flow_Form.value['lat']
    let long = this.flow_Form.value['long']
    if (lat && long)
      this.mapManagerSV.updateTEmpPin([lat, long])
  }

  updateColor() {
    let color = this.flow_Form.value['type']
    this.mapManagerSV.updateTempPinColor(color)
  }

  clearForm(e?) {
    if (e) e.preventDefault()
    this.flow_Form.reset()
    this.mapManagerSV.removeTempin()
  }

  confirm() {
    this.mapManagerSV.addPin()
    this.clearForm()
  }



}
