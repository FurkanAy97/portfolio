import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router, NavigationEnd  } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends AppComponent {
  burgerMenuVisible: boolean = false;
  isHomePage: boolean = false


  constructor(viewportScroller: ViewportScroller, private router: Router) {
    super(viewportScroller);
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is not '/imprint'
        if (event.url == '/') {
          this.isHomePage = true;
        } else {
          this.isHomePage = false;
        }
      }
    });
  }

  toggleBurgerMenu() {
    this.burgerMenuVisible = !this.burgerMenuVisible;
  }
}
