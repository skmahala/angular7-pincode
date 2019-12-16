import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular7-pincode-template';

  constructor() { }
  ngOnInit() {
  }
  onFullFill(data: any) {
    console.log("your otp is : " + data)
  }
}