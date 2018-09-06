import { Injectable } from '@angular/core';
import { FlowStepModel } from "../models/flowstep.model";
import RuleEngine from "../util/rule-engine";

@Injectable({
  providedIn: 'root'
})
export class RuleEngineService {
  
  constructor() {
    
  }

  execute(model: FlowStepModel, data: any) {
    const ruleEngine = new RuleEngine([
      {
        name: model.title,
        condition: model.content,
        action: model.action
      }]);

    ruleEngine.exec(data);
    return data;
  }
}
