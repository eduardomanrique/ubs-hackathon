import { Injectable } from '@angular/core';
import { FlowModel } from "../models/flow.model";
import { FlowStepTypes } from "../models/flowsteptypes.enum";

@Injectable({
  providedIn: 'root'
})
export class FlowEngineService {

  constructor() { }

  execute(model: FlowModel) {
    for (let i = 0; i<model.steps.length; i++) {
      switch (model.steps[i].stepType) {
        case FlowStepTypes.API:
          console.log("REQUEST TO API");
          break;
        case FlowStepTypes.RULE:
          console.log("APPLY RULE");
          break;
      default:
        break;
      }
    }
  }
}
