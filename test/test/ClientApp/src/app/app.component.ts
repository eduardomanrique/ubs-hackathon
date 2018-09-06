import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  public addPageVisible: boolean;

  public addPageClass: string;
  
  addFlowBtnHandler() {
    this.addPageClass = "hide-animation";
    setTimeout(() => {
      this.addPageVisible = true;
      this.addPageClass = "";
    }, 1000);
  }

  cancelBtnHandler() {
    this.addPageClass = "show-animation";
    setTimeout(() => {
      this.addPageVisible = false;
      this.addPageClass = "";
    }, 1000);
  }
}
