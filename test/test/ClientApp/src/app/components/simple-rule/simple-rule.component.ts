import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlowStepModel } from '../../models/flowstep.model';

@Component({
  selector: 'app-simple-rule',
  templateUrl: './simple-rule.component.html',
  styleUrls: ['./simple-rule.component.css']
})
export class SimpleRuleComponent implements OnInit {

  @Input() model: FlowStepModel;
  @Input() expanded: any;
  @Output() removeButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  //public expanded = true;

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
