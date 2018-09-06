import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() cancelButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public model: FlowModel;
  public availableUrls: any[] = [
    {
      name: "BPX",
      url: "http://www.mocky.io/v2/5b91a5a83100007c00939a49"
    },
    {
      name: "Another application",
      url: "http://localhost:8080/converter/processData"
    },
    {
      name: "Export to Excel",
      url: "http://localhost:8080/converter/convertToExcel"
    }
  ];

  constructor(private storageService: LocalStorageService, private flowListService: FlowListService) { }

  ngOnInit() {
    this.model = new FlowModel("");

    this.model.steps = [];
    this.addEmptyStepHandler('url');
  }

  titleChangedHandler(val: string) {
    this.model.title = val;
  }

  cancelBtnHandler() {
    this.cancelButtonClick.emit();
  }

  stepUrlChangedHandler(item, step) {
    step.content = item.url;
    step.title = item.name;
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
    if (flows.filter(item => item.title === this.model.title).length) {
      err.push(`Flow with name: ${this.model.title} already exists, try to choose another name`);
    }

    return err;
  }

  saveBtnHandler() {
    const errors = this.validateModel();
    if (!errors.length) {
      this.flowListService.addFlow(this.model);
      this.cancelButtonClick.emit();
    } else {
      alert(errors.join("\n"));
    }
  }
}
