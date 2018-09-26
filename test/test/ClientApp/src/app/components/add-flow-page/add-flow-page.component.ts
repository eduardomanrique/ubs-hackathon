import { Component, OnInit } from '@angular/core';
import { FlowModel } from "../../models/flow.model";
import { FlowStepModel } from "../../models/flowstep.model";
import { FlowStepTypes } from "../../models/flowsteptypes.enum";
import { FlowListService } from '../../services/flow-list.service';
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: 'app-add-flow-page',
  templateUrl: './add-flow-page.component.html',
  styleUrls: ['./add-flow-page.component.css']
})
export class AddFlowPageComponent implements OnInit {

  public model: FlowModel;

  constructor(private storageService: LocalStorageService, private flowListService: FlowListService) { }

  private isEdit: boolean;

  ngOnInit() {
    this.flowListService.EditFlowEvent.subscribe((model: FlowModel) => {
      if(model) {
        this.isEdit = true;
        this.model = model;
      } else {
        this.isEdit = false;
        this.model = new FlowModel("");

        this.model.steps = [];
        this.addEmptyStepHandler('url');
      }
    });
  }

  ngOnDestroy(): void {
    this.flowListService.EditFlowEvent.unsubscribe();
  }

  titleChangedHandler(val: string) {
    this.model.title = val;
  }

  cancelBtnHandler() {
    this.flowListService.closeEditor();
  }

  removeStepHandler(index: number) {
    this.model.steps.splice(index, 1);
  }

  addEmptyStepHandler(stepType: string) {

    switch (stepType) {
      case 'url':
        const newApi = new FlowStepModel("", "", "");
        newApi.stepType = FlowStepTypes.API;
        this.model.steps.push(newApi);
        break;
      case 'rule':
        const newRule = new FlowStepModel("", "", "");
        newRule.stepType = FlowStepTypes.RULE;
        this.model.steps.push(newRule);
        break;
      default: break;
    }
  }

  validateModel() {
    const err = [];
    const flows = this.flowListService.getFlows();

    if (!this.model.title) {
      err.push("Name is mandatory");
    }
    if (this.model.steps.length == 0) {
      err.push("There should be at least 1 step in the flow");
    }
    if (!this.isEdit && flows.filter(item => item.title === this.model.title).length) {
      err.push(`Flow with name: ${this.model.title} already exists, try to choose another name`);
    }

    return err;
  }

  saveBtnHandler() {
    const errors = this.validateModel();
    if (!errors.length) {
      this.flowListService.addFlow(this.model, this.isEdit);
      this.flowListService.closeEditor();
    } else {
      alert(errors.join("\n"));
    }
  }
}
