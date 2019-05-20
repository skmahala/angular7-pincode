import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular7PincodeModule } from 'angular7-pincode'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Angular7PincodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
