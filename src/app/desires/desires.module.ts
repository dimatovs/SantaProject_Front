import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesiresRoutingModule } from './desires-routing.module';
import { DesiresComponent } from './desires.component';
import { FormsModule } from '@angular/forms';
import { DesireInputComponent } from './desire-input/desire-input.component';


@NgModule({
  declarations: [
    DesiresComponent,
    DesireInputComponent
  ],
  imports: [
    CommonModule,
    DesiresRoutingModule,
    FormsModule
  ]
})
export class DesiresModule { }
