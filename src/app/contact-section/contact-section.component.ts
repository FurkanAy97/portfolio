import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent extends AppComponent  {

  arrowSrc = 'assets/img/go-up-button.png'
  arrowSrcHover = 'assets/img/gp-up-button-blue.png'
  isHovered = false;
  isSuccess: boolean = false
  isFail: boolean = false
}
