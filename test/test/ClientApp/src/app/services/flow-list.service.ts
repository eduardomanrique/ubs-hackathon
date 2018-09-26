import { Injectable, EventEmitter } from "@angular/core";
import { FlowModel } from "../models/flow.model";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root"
})
export class FlowListService {
  public EditFlowEvent: EventEmitter<FlowModel> = new EventEmitter<FlowModel>();
  public CancelFlowEvent: EventEmitter<void> = new EventEmitter<void>();
  private flows: FlowModel[];

  constructor(private storageService: LocalStorageService) {
    let data = this.storageService.getObj("flows");

    if (!data || !data.length) {
      data = [];
      this.storageService.setObj("flows", data);
    }

    this.flows = data;
  }

  closeEditor(): void {
    this.CancelFlowEvent.emit();
  }

  navToNewFlow(): void {
    this.EditFlowEvent.emit(null);
  }

  navToEditFlow(model: FlowModel): void {
    this.EditFlowEvent.emit(model);
  }

  getFlows(): FlowModel[] {
    return this.flows;
  }

  addFlow(model: FlowModel, replace: boolean = false) {
    const index = this.flows.findIndex(item => item.title == model.title);
    if (replace && index >= 0) {
      this.flows.splice(index, 1, model);
      this.storageService.setObj("flows", this.flows);
    } else {
      if (index < 0) {
        this.flows.push(model);
        this.storageService.setObj("flows", this.flows);
      }
    }
  }

  removeFlow(title: string) {
    const index = this.flows.findIndex(flow => flow.title === title);
    if (index >= 0) {
      this.flows.splice(index, 1);
      this.storageService.setObj("flows", this.flows);
    }
  }
}
