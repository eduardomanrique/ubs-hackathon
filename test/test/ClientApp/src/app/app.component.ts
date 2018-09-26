import { FlowModel } from "./models/flow.model";
import { FlowListService } from "./services/flow-list.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ClientApp";

  public addPageVisible: boolean;

  public addPageClass: string = "display-none";

  constructor(private flowListService: FlowListService) {}

  addFlowBtnHandler() {
    this.flowListService.navToNewFlow();
  }

  ngOnInit(): void {
    this.flowListService.EditFlowEvent.subscribe((model: FlowModel) => {
      this.addPageClass = "show-animation";
    });

    this.flowListService.CancelFlowEvent.subscribe(() => {
      this.addPageClass = "hide-animation";
      setTimeout(() => {
        this.addPageClass = "hide-animation display-none";
      }, 500);
    });
  }

  ngOnDestroy(): void {
    this.flowListService.EditFlowEvent.unsubscribe();
    this.flowListService.CancelFlowEvent.unsubscribe();
  }
}
