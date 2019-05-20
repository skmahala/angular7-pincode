import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { Angular7PincodeComponent } from './angular7-pincode.component';

@NgModule({
  declarations: [Angular7PincodeComponent],
  imports: [CommonModule, FormsModule],
  exports: [Angular7PincodeComponent]
})
export class Angular7PincodeModule { }
