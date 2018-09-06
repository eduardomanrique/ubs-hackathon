import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlowModel } from "../../models/flow.model";

@Component({
  selector: 'app-simple-rule',
  templateUrl: './simple-rule.component.html',
  styleUrls: ['./simple-rule.component.css']
})
export class SimpleRuleComponent implements OnInit {

  @Input() model: FlowModel;
  @Output() removeButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public expanded = true;

  constructor() { }

  ngOnInit() {
  }

  textChangedHandler(event) {
    const name = event.target.getAttribute('name');
    this.model[name] = event.target.value;
    
  }

  removeStepHandler() {
    this.removeButtonClick.emit();
  }
}
