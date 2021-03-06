import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FlowMeterComponent } from './flow-meter/flow-meter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LegendaStrefComponent } from './legenda-stref/legenda-stref.component';
import { LegendaPrzeplywuComponent } from './legenda-przeplywu/legenda-przeplywu.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FlowMeterComponent,
    LegendaStrefComponent,
    LegendaPrzeplywuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
