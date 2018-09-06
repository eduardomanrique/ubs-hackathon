import { Component, OnInit, Input } from '@angular/core';
import { FlowModel } from "../../models/flow.model";
import { FlowListService } from '../../services/flow-list.service';

@Component({
  selector: 'app-flow-item',
  templateUrl: './flow-item.component.html',
  styleUrls: ['./flow-item.component.css']
})
export class FlowItemComponent implements OnInit {

  @Input() model: FlowModel;

  public expanded: boolean;

  constructor(private flowListService: FlowListService) { }

  ngOnInit() {
  }

  removeFlowHandler() {
    if (confirm(`Are you sure you want to delete flow: ${this.model.title} ?`)) {
      this.flowListService.removeFlow(this.model.title);
    }
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
