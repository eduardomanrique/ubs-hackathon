import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: 'app-add-flow-page',
  templateUrl: './add-flow-page.component.html',
  styleUrls: ['./add-flow-page.component.css']
})
export class AddFlowPageComponent implements OnInit {

  @Output() cancelButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private storageService: LocalStorageService) { }

  ngOnInit() {
  }

  cancelBtnHandler() {
    this.cancelButtonClick.emit();
  }

  saveBtnHandler() {
    alert('SAVE');
  }
}
