import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlowPageComponent } from './add-flow-page.component';

describe('AddFlowPageComponent', () => {
  let component: AddFlowPageComponent;
  let fixture: ComponentFixture<AddFlowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
