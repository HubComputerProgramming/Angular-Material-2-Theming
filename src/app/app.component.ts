import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  theme= "my-light-theme";

  constructor(
    private overlayContainer: OverlayContainer
  ) {

  }
  ngOnInit(): void {
    this.overlayContainer.themeClass = this.theme;
  }


  onThemeChange(){
    this.overlayContainer.themeClass = this.theme;
  }
}
