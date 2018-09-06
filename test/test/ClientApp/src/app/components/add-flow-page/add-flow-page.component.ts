import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../../services/local-storage.service";
import { FlowModel } from "../../models/flow.model";
import { FlowStepModel } from "../../models/flowstep.model";
import { FlowStepTypes } from "../../models/flowsteptypes.enum";
import { FlowListService } from '../../services/flow-list.service';

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
      url: "http://www.mocky.io/v2/5b90ff993100008200939774"
    },
    {
      name: "Google",
      url: "www.oogle.com"
    },
    {
      name: "Test",
      url: "some long long long url goes here"
    }
  ];

  constructor(private storageService: LocalStorageService, private flowListService: FlowListService) { }

  ngOnInit() {
    this.model = new FlowModel("");

    this.model.steps = [
      new FlowStepModel("BPX", "http://www.mocky.io/v2/5b90ff993100008200939774", ""),
      new FlowStepModel("BPX", "http://www.mocky.io/v2/5b90ff993100008200939774", "")
    ];
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

    if (!this.model.title) {
      err.push("Name is mandatory");
    }
    if (this.model.steps.length == 0) {
      err.push("There should be at least 1 step in the flow");
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
