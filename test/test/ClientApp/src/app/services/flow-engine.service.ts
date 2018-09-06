import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlowModel } from "../models/flow.model";
import { FlowStepTypes } from "../models/flowsteptypes.enum";
import RuleEngine from "../util/rule-engine";

@Injectable({
  providedIn: 'root'
})
export class FlowEngineService {

  constructor(private http: HttpClient) { }

  async execute(model: FlowModel) {
    let currentContent;
    for (let i = 0; i<model.steps.length; i++) {
      console.log(i)
      let item = model.steps[i];
      switch (item.stepType) {
        case FlowStepTypes.API:
          console.log("REQUEST TO API: " + item.content);
          let response;
          if(i === 0){
            response = this.http.get(item.content);
          }else{
            response = this.http.post(item.content, JSON.stringify(currentContent), {headers: new HttpHeaders().set('Content-Type', 'application/json')});
          }
          console.log(i + ': ' + response + ' ' + model.steps.length)
          if(i === model.steps.length - 1){
            console.log('open ')
            const result = await response.toPromise();
            console.log('open ' + result.url)
            console.log(result.url)
            window.open(result.url);
          }else{
            console.log('nn ')
            currentContent = (await response.toPromise())['data']['opportunities'];
          }
          break;
        case FlowStepTypes.RULE:
          console.log("APPLY RULE");
          const engine = new RuleEngine([item]);
          currentContent.forEach(entity => engine.exec(entity));
          break;
      default:
        break;
      }
    }
    console.log(JSON.stringify(currentContent));
  }
}
