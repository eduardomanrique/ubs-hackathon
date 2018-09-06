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
    this.addPageClass = "show-animation";
    this.addPageVisible = true;
  }

  cancelBtnHandler() {
    this.addPageClass = "hide-animation";
    setTimeout(() => {
      this.addPageVisible = false;
    }, 300);
  }
}
