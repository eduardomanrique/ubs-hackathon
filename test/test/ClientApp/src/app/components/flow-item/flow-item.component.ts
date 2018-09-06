import { Component, OnInit, Input } from '@angular/core';
import { FlowModel } from "../../models/flow.model"

@Component({
  selector: 'app-flow-item',
  templateUrl: './flow-item.component.html',
  styleUrls: ['./flow-item.component.css']
})
export class FlowItemComponent implements OnInit {

  @Input() flowModel: FlowModel;

  constructor() { }

  ngOnInit() {
  }
}
