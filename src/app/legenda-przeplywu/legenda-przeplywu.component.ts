import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legenda-przeplywu',
  templateUrl: './legenda-przeplywu.component.html',
  styleUrls: ['./legenda-przeplywu.component.scss']
})
export class LegendaPrzeplywuComponent implements OnInit {

  pins_ = JSON.stringify([
    ['Przepływ nieznany', '../../assets/pins/pin1.png'],
    ['Przepływ - SUW/ZUW', '../../assets/pins/pin2.png'],
    ['Przepływ - Zbiornik', '../../assets/pins/pin3.png'],
    ['Przepływ międzystrefowy', '../../assets/pins/pin4.png'],
    ['Sprzedaż - Online', '../../assets/pins/pin5.png'],
    ['Sprzedaż - odczyt co 12h', '../../assets/pins/pin6.png'],
    ['Sprzedaż - odczyt ręczny', '../../assets/pins/pin7.png'],
    ['Przepływ wirtualny', '../../assets/pins/pin8.png'],
  ])
  pins = []
  isopen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleView() {
    if (this.pins.length) {
      this.isopen = false
      this.pins = []
    }
    else {
      this.isopen = true
      this.pins = JSON.parse(this.pins_)
    }

  }
}
