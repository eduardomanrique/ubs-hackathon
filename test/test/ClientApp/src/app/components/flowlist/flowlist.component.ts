import { Component, OnInit } from '@angular/core';
import { FlowListService } from '../../services/flow-list.service';
import { FlowModel } from "../../models/flow.model";

@Component({
  selector: 'app-flowlist',
  templateUrl: './flowlist.component.html',
  styleUrls: ['./flowlist.component.css']
})
export class FlowlistComponent implements OnInit {

  constructor(private flowListService: FlowListService) { }

  ngOnInit() {
    this.myFlows = this.flowListService.getFlows();
  }

  public myFlows : FlowModel[];
}
