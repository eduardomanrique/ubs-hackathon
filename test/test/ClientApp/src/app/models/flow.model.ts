import { FlowStepModel } from "./flowstep.model"

export class FlowModel {
  public steps: FlowStepModel[] = [];

  constructor(public title: string) {}
}
