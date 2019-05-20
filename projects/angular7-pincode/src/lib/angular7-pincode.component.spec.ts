import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular7PincodeComponent } from './angular7-pincode.component';

describe('Angular7PincodeComponent', () => {
  let component: Angular7PincodeComponent;
  let fixture: ComponentFixture<Angular7PincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular7PincodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular7PincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
