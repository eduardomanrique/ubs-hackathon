import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-group',
  templateUrl: './rule-group.component.html',
  styleUrls: ['./rule-group.component.css']
})
export class RuleGroupComponent implements OnInit {

  constructor() { }

  rules = [];

  pos = 0;

  setPos(index){
    this.pos = index;
    console.log(index)
  }

  textChangedHandler(event:any, rule:any) {
    const val = event.target.value;
    const name = event.target.getAttribute('name');
    rule[name] = val;
  }

  addRule(){
    this.rules.push({
      name: 'Unnamed',
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
