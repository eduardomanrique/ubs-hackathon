import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../../services/local-storage.service";
import { FlowModel } from "../../models/flow.model";
import { FlowStepModel } from "../../models/flowstep.model";
import { FlowStepTypes } from "../../models/flowsteptypes.enum";

@Component({
  selector: 'app-add-flow-page',
  templateUrl: './add-flow-page.component.html',
  styleUrls: ['./add-flow-page.component.css']
})
export class AddFlowPageComponent implements OnInit {

  @Output() cancelButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public model: FlowModel;

  constructor(private storageService: LocalStorageService) { }

  ngOnInit() {
    this.model = new FlowModel("");

    this.model.steps = [
      new FlowStepModel("BPX", "http://www.mocky.io/v2/5b90ff993100008200939774"),
      new FlowStepModel("BPX", "http://www.mocky.io/v2/5b90ff993100008200939774"),
      new FlowStepModel("BPX", "http://www.mocky.io/v2/5b90ff993100008200939774")
    ];
  }

  titleChangedHandler(val: string) {
    this.model.title = val;
  }

  cancelBtnHandler() {
    this.cancelButtonClick.emit();
  }

  stepUrlChangedHandler(val, step) {
    step.content = val;
  }

  removeStepHandler(index: number) {
    this.model.steps.splice(index, 1);
  }

  addEmptyStepHandler(stepType: string) {
    if (stepType === 'url') {
      const newAPI = new FlowStepModel("BPX", "");
      newAPI.stepType = FlowStepTypes.API;
      this.model.steps.push(newAPI);
    }
  }

  saveBtnHandler() {
    alert('SAVE');
  }
}
