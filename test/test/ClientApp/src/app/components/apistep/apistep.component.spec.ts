import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApistepComponent } from './apistep.component';

describe('ApistepComponent', () => {
  let component: ApistepComponent;
  let fixture: ComponentFixture<ApistepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApistepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
