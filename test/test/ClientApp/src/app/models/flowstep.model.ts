import { FlowStepTypes} from "./flowsteptypes.enum";

export class FlowStepModel {
  public title: string;
  public content: string;
  public stepType = FlowStepTypes.Request;
}
