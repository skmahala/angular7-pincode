import { Component, OnInit, Input, ViewChildren, ElementRef, QueryList, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular7-pincode',
  template: `
   <div class="otp-container">
    <input class="otp-input {{class}}" *ngFor="let pininput of pin;let i = index;trackBy: trackByFn" #otpInput name='otpInput{{i}}' [(ngModel)]="pin[i]" autocomplete='off' maxlength="1" [disabled]="currentIndex!=i" (keyup)="onKeyUp($event,i)" (keydown)="onKeyDown($event,i)"/>
   </div>
  `,
  styles: [`
    .otp-container{
      width:100%;
      text-align:left;
    }
    .otp-input{
      padding: 5px;
      margin: 0px;
      border: 1px solid #ddd;
      border-right: none;
      text-align: center;
      max-width:50px;
    }
    .otp-input:last-child{
      border-right: 1px solid #ddd;
    }
    `],
  encapsulation: ViewEncapsulation.None
})
export class Angular7PincodeComponent implements OnInit {
  @ViewChildren('otpInput') allOtpInputs: QueryList<ElementRef>
  @Output() onFullFill = new EventEmitter<string>();
  @Input() size: number = 4;
  @Input() class: string = "";
  @Input() isOnlyNumeric: boolean = false;
  pin: string[] = [];
  pinCode: string = "";
  currentIndex: number = 0;
  otpRegex: RegExp;

  constructor() { }

  ngOnInit() {
    if (this.isOnlyNumeric) {
      this.otpRegex = new RegExp(/[0-9]/);
    }
    else {
      this.otpRegex = new RegExp(/[a-zA-Z0-9]/);
    }
    this.getPin();
  }
  getPin() {
    for (let i = 0; i < this.size; i++) {
      this.pin.push("");
    }
  }
  onKeyUp(event: any, index: any) {
    let key: any = event.keyCode || event.which;
    if (!this.otpRegex.test(event.key)) {
      event.preventDefault();
      this.pin[index] = "";
      return false;
    }
    if (key !== 8 && index != this.size - 1) {
      this.currentIndex = index + 1;
      setTimeout(() => {
        this.allOtpInputs.toArray()[index + 1].nativeElement.focus();
      }, 100)
    }
    this.pinCode = this.pin.join('');
    if (this.pinCode.length == this.size) {
      setTimeout(() => {
        this.onFullFill.emit(this.pinCode);
      })
    }
  }
  onKeyDown(event: any, index: any) {
    let key: any = event.keyCode || event.which;
    if (key === 8 && index != 0) {
      setTimeout(() => {
        this.currentIndex = index - 1;
      }, 10)
      setTimeout(() => {
        this.allOtpInputs.toArray()[index - 1].nativeElement.focus();
        this.onFullFill.emit(null);
      }, 100)
    }
  }
  trackByFn(index: any) {
    return index;
  }
}
