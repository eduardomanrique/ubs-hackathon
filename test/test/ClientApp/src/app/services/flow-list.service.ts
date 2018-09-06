import { Injectable } from '@angular/core';
import { FlowModel } from "../models/flow.model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class FlowListService {

  private flows: FlowModel[];

  constructor(private storageService: LocalStorageService) {
    let data = this.storageService.getObj('flows');

    if (!data || !data.length) {
      data = [
        new FlowModel("test 1"),
        new FlowModel("test 2"),
        new FlowModel("test 3")
      ];
      this.storageService.setObj('flows', data);
    }

    this.flows = data;
  }

  getFlows():FlowModel[] {
    return this.flows;
  }

  addFlow(model: FlowModel) {
    this.flows.push(model);
    this.storageService.setObj('flows', this.flows);
  }

  removeFlow(title: string) {
    const index = this.flows.findIndex(flow => flow.title === title);
    if (index >= 0) {
      this.flows.splice(index, 1);
      this.storageService.setObj('flows', this.flows);
    }
  }
}
