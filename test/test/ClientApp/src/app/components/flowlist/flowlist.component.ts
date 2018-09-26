import { Component, OnInit, Input } from '@angular/core';
import { FlowListService } from '../../services/flow-list.service';
import { FlowModel } from '../../models/flow.model';

@Component({
  selector: 'app-flowlist',
  templateUrl: './flowlist.component.html',
  styleUrls: ['./flowlist.component.css']
})
export class FlowlistComponent implements OnInit {
  @Input() filterText: string;
  constructor(private flowListService: FlowListService) { }

  public myFlows: FlowModel[];

  ngOnInit() {
    this.myFlows = this.flowListService.getFlows();
  }
}
