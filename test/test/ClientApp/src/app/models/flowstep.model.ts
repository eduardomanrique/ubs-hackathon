import { FlowStepTypes} from "./flowsteptypes.enum";

export class FlowStepModel {
  public stepType = FlowStepTypes.API;

  constructor(public title: string, public content: string) {}
}
