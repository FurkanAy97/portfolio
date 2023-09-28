import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isMobileScreen:boolean = false;
  
  constructor(private viewportScroller: ViewportScroller) {}
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobileScreen = window.innerWidth <= 990;
  }


  public handleAnchor(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
}
