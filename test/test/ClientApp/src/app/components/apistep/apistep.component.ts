import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlowStepModel } from "../../models/flowstep.model";

@Component({
  selector: 'app-apistep',
  templateUrl: './apistep.component.html',
  styleUrls: ['./apistep.component.css']
})
export class ApistepComponent implements OnInit {

  @Input() model: FlowStepModel;
  @Input() expanded: any;
  @Output() removeButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public selected: {
    name: string,
    url: string,
    availableOptions: any[],
    optionsType: string
  };
  //public expanded = true;

  public availableUrls: any[] = [
    {
      name: "BPX",
      url: "http://www.mocky.io/v2/5b922d8d3100008000939bed",
      availableOptions: ['banker advanced details', 'opportunity advanced details'],
      optionsType: 'checkbox'
    },
    {
      name: "Another processing application",
      url: "http://localhost:8080/converter/processData",
      availableOptions: ['calculate currency', 'group by country'],
      optionsType: 'checkbox'
    },
    {
      name: "Export",
      url: "http://localhost:8080/converter/convertToExcel",
      availableOptions: ['Excel', 'Word'],
      optionsType: 'radio'
    },
    {
      name: "Local file",
      url: "http://localhost:8080/converter/convertToExcel",
      availableOptions: ['Excel', 'Word'],
      optionsType: 'radio'
    }
  ];

  constructor() { }

  ngOnInit() {
    const item = this.availableUrls.filter(
      (item) => item.name == this.model.title && item.url == this.model.content
    )[0];

    if(item) {
      this.selected = item;
    }
  }

  removeStepHandler() {
    this.removeButtonClick.emit();
  }

  stepUrlChangedHandler(item) {
    this.model.content = item.url;
    this.model.title = item.name;

    this.selected = item;
  }
}
