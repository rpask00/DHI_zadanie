import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import * as olProj from 'ol/proj';
import { fromLonLat } from 'ol/proj.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import OSM from 'ol/source/OSM';
import { MapmanagerService } from '../SERVICES/mapmanager.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;
  vectorSource;
  vectorLayer;
  rasterLayer;
  tempPin_id: String = '_';
  tempPinColors = [
    [185, 185, 185],
    [3, 215, 8],
    [215, 93, 3],
    [11, 69, 102],
    [3, 215, 167],
    [187, 3, 215],
    [120, 0, 0],
    [84, 84, 84],
  ]
  tempPinColor: number[]

  constructor(
    private mapManagerSV: MapmanagerService
  ) {
    // this.tempPinColor = this.tempPinColors[0]
  }

  ngOnInit() {

    this.initilizeMap();
    this.map.on('singleclick', evt => {
      this.makeTempPin(olProj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'))
    });

    this.mapManagerSV.tempPin$.subscribe(tempPin => {
      if (tempPin.join('_') != this.tempPin_id)
        this.makeTempPin(tempPin)
    })

    this.mapManagerSV.tempPinColor$.subscribe(colorIndex => {
      this.tempPinColor = this.tempPinColors[colorIndex]
      if (this.tempPin_id != '_') {
        let latlong = this.tempPin_id.split('_')
        this.makeTempPin(latlong)
      }

    })

    this.mapManagerSV.pinSaveEmitter.subscribe(() => this.savePin())
    this.mapManagerSV.clearFormEmitter.subscribe(() => this.removePin(this.tempPin_id))
  }

  makeTempPin(latLong: String[]) {
    if (this.tempPin_id != '_')
      this.removePin(this.tempPin_id)

    this.addpin(latLong, this.tempPinColor)
    this.mapManagerSV.updateTEmpPin(latLong)
  }

  savePin() {
    this.tempPin_id = '_'
  }

  addpin(latLong: String[], color = [0, 0, 0]) {
    this.tempPin_id = latLong.join('_')
    let tempPin = new Feature({
      geometry: new Point(fromLonLat(latLong))
    });


    tempPin.setStyle(new Style({
      image: new Icon(({
        color: color,
        crossOrigin: 'anonymous',
        src: 'assets/pins/pin.png',
        imgSize: [40, 70]
      }))
    }));

    tempPin.setId(this.tempPin_id)
    this.vectorSource.addFeatures([tempPin])
  }

  removePin(id: String) {
    if (id != '_') {
      let feature = this.vectorLayer.getSource().getFeatureById(id)
      this.vectorLayer.getSource().removeFeature(feature)
      this.tempPin_id = '_'
    }
  }


  initilizeMap() {
    this.vectorSource = new VectorSource({
      features: []
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: fromLonLat([22.395065, 49.381032]),
        zoom: 5
      })
    });
  }


}
