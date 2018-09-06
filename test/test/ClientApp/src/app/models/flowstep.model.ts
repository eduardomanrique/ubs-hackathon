import { FlowStepTypes} from "./flowsteptypes.enum";

export class FlowStepModel {
  public stepType: FlowStepTypes = FlowStepTypes.API;

  constructor(public title: string, public content: string, public action: string = "") {}
}
