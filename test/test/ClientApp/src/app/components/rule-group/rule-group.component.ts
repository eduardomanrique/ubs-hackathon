import { Component, OnInit } from '@angular/core';
import RuleEngine from '../../util/rule-engine';

@Component({
  selector: 'app-rule-group',
  templateUrl: './rule-group.component.html',
  styleUrls: ['./rule-group.component.css']
})
export class RuleGroupComponent implements OnInit {

  constructor() { }

  rules = [{
    name: 'condition 1',
    condition: '$entity.xyz == "ABC" and $entity.point == 3',
    action: '$entity.evaluation = 10'
},{
    name: 'condition 2',
    condition: '$entity.point == 2',
    action: `
$entity.evaluation = $entity.point * 2
$entity.xyz = 'XYZ'
    `
},{
    name: 'condition 3',
    condition: '$entity.name == "Test3"',
    action: '$entity.evaluation = $entity.evaluation + 2'
}];

  pos = 0;

  setPos(index) {
    this.pos = index;
    console.log(index)
  }

  textChangedHandler(event: any, rule: any) {
    const val = event.target.value;
    const name = event.target.getAttribute('name');
    rule[name] = val;
  }

  addRule() {
    this.rules.push({
      name: 'Unnamed',
      condition: '',
      action: ''
    });
  }

  removeRule(rule) {
    //this.rules.splice(this.rules.indexOf(rule), 1);
    const r = new RuleEngine(this.rules);
    const e = {
      name: 'Test3',
      point: 2,
      xyz: 'X',
      evaluation: 0
    };
    r.exec(e)
    console.log(JSON.stringify(e))
  }

  ngOnInit() {
  }

}
