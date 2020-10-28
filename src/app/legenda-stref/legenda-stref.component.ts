import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legenda-stref',
  templateUrl: './legenda-stref.component.html',
  styleUrls: ['./legenda-stref.component.scss']
})
export class LegendaStrefComponent implements OnInit {

  squares_ = JSON.stringify([
    ['brak', '#dbe4e9'],
    ['0', '#4dff4d'],
    ['10', '#60e645'],
    ['20', '#71cc3e'],
    ['30', '#81b336'],
    ['40', '#94992e'],
    ['50', '#a68027'],
    ['60', '#b8661f'],
    ['70', '#ca4c17'],
    ['80', '#db340f'],
    ['90', '#ed1908'],
    ['100', '#ff0000'],
  ])
  squares = []
  isopen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleView() {
    if (this.squares.length) {
      this.isopen = false
      this.squares = []
    }
    else {
      this.isopen = true
      this.squares = JSON.parse(this.squares_)
    }

  }

}
