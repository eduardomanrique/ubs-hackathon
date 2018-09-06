import { Component, OnInit, Input } from '@angular/core';
import { FlowModel } from "../../models/flow.model";

@Component({
  selector: 'app-rule-group',
  templateUrl: './rule-group.component.html',
  styleUrls: ['./rule-group.component.css']
})
export class RuleGroupComponent implements OnInit {

  @Input() model: FlowModel;

  constructor() { }

  rules = [];

  pos = 0;

  setPos(index){
    this.pos = index;
  }

  textChangedHandler(event:any, rule:any) {
    const val = event.target.value;
    const name = event.target.getAttribute('name');
    rule[name] = val;
  }

  addRule(){
    this.rules.push({
      name: '',
      condition: '',
      action: ''
    });
  }

  removeRule(rule){
    this.rules.splice(this.rules.indexOf(rule), 1);
  }

  ngOnInit() {
    
  }

}
