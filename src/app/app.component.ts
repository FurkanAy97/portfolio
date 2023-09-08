import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
}
