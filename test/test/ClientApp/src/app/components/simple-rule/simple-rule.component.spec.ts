import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRuleComponent } from './simple-rule.component';

describe('SimpleRuleComponent', () => {
  let component: SimpleRuleComponent;
  let fixture: ComponentFixture<SimpleRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
