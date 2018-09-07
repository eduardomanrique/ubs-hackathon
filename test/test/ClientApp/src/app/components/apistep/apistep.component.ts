import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlowStepModel } from "../../models/flowstep.model";

@Component({
  selector: 'app-apistep',
  templateUrl: './apistep.component.html',
  styleUrls: ['./apistep.component.css']
})
export class ApistepComponent implements OnInit {

  @Input() model: FlowStepModel;
  @Output() removeButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public availableUrls: any[] = [
    {
      name: "BPX",
      url: "http://www.mocky.io/v2/5b922d8d3100008000939bed"
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

  constructor() { }

  ngOnInit() {
  }

  removeStepHandler() {
    this.removeButtonClick.emit();
  }

  stepUrlChangedHandler(item) {
    this.model.content = item.url;
    this.model.title = item.name;
  }
}
