import { Injectable } from '@angular/core';
import { FlowModel } from "../models/flow.model";

@Injectable({
  providedIn: 'root'
})
export class FlowListService {

  private flows: FlowModel[];

  constructor() {
    this.flows = [
      new FlowModel("test 1"),
      new FlowModel("test 2"),
      new FlowModel("test 3")
    ];
  }

  getFlows():FlowModel[] {
    return this.flows;
  }
}
