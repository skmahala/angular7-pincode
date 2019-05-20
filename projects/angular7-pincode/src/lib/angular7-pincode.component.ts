import { Component, OnInit, Input, ViewChildren, ElementRef, QueryList, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'angular7-pincode',
  template: `
   <div class="otp-container">
    <input class="otp-input {{class}}" *ngFor="let pininput of Pin;let i = index;trackBy: trackByFn" id='otpInput{{i}}' #otpInput name='otpInput{{i}}' [(ngModel)]="Pin[i]" autocomplete='off' maxlength="1" (keyup)="onKeyUp($event,i)" (keydown)="onKeyDown($event,i)"/>
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
    }
    .otp-input:last-child{
      border-right: 1px solid #ddd;
    }
    `],
  encapsulation: ViewEncapsulation.None
})
export class Angular7PincodeComponent implements OnInit {
  @ViewChildren('otpInput') allOtpInputs: QueryList<ElementRef>
  @Output() onFillAll = new EventEmitter<string>();
  @Input() size: number = 4;
  @Input() class: string = "";
  Pin: any[] = [];
  PinCode: string = "";

  constructor() { }

  ngOnInit() {
    this.GetPin();
  }
  GetPin() {
    for (let i = 0; i < this.size; i++) {
      this.Pin.push("");
    }
  }
  onKeyUp(event: any, index: any) {
    let key: any = event.keyCode || event.which;
    if (key !== 8 && index != this.size - 1) {
      setTimeout(() => {
        this.allOtpInputs.toArray()[index + 1].nativeElement.focus();
      })
    }
    setTimeout(() => {
      this.PinCode = this.Pin.join('');
      this.onFillAll.emit(this.PinCode);
    })
  }
  onKeyDown(event: any, index: any) {
    let key: any = event.keyCode || event.which;
    if (key === 8 && index != 0) {
      setTimeout(() => {
        this.allOtpInputs.toArray()[index - 1].nativeElement.focus();
      })
    }
  }
  trackByFn(index: any) {
    return index;
  }
}
