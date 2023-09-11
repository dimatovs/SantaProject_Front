import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgModel } from '@angular/forms';


@Component({
    selector: 'app-desire-input',
    templateUrl: './desire-input.component.html',
    styleUrls: ['./desire-input.component.scss']
  })

  export class DesireInputComponent {

    @Input() desireTitle = "";
    @Input() buttonLabel: string ='';
    @Output() submit = new EventEmitter<string>();

    saveDesire(desireInput: NgModel) {
        if (desireInput.control.valid) {
          this.submit.emit(this.desireTitle);
          this.desireTitle = "";
          desireInput.control.markAsUntouched();
        } else {
          desireInput.control.markAsTouched();
        }
    }
  }