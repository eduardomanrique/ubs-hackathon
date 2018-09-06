import { Component, OnInit, Input } from '@angular/core';
import { FlowModel } from "../../models/flow.model";
import { FlowListService } from '../../services/flow-list.service';

@Component({
  selector: 'app-flow-item',
  templateUrl: './flow-item.component.html',
  styleUrls: ['./flow-item.component.css']
})
export class FlowItemComponent implements OnInit {

  @Input() flowModel: FlowModel;

  constructor(private flowListService: FlowListService) { }

  ngOnInit() {
  }

  removeFlowHandler() {
    if (confirm(`Are you sure you want to delete flow: ${this.flowModel.title} ?`)) {
      this.flowListService.removeFlow(this.flowModel.title);
    }
  }
}
