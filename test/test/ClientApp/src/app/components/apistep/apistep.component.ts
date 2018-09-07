import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
