import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesiresComponent } from './desires.component';

const routes: Routes = [
  { 
    path: '', 
    component: DesiresComponent 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesiresRoutingModule { }
