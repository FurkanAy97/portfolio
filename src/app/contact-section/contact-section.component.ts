import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import {FormGroup, NgForm} from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class ContactSectionComponent extends HomeComponent {
  arrowSrc = 'assets/img/go-up-button.png';
  arrowSrcHover = 'assets/img/gp-up-button-blue.png';
  isHovered = false;
  isSuccess: boolean = false;
  isFail: boolean = false;
  isSentSuccessfully: boolean = false;
  @ViewChild('myForm') myForm!: FormGroup;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;

  formData = {
    name: '',
    email: '',
    message: '',
  };
  agreeToPolicy: boolean = false;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    try {
      const response = await fetch(
        'https://furkan-ayhan.de/send_mail/send_mail.php',
        {
          method: 'POST',
          body: formData,
        }
      );
    } catch (error) {
      this.isSentSuccessfully = false;
      console.error('An error occurred:', error);
    } finally {
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      this.isSentSuccessfully = true;
      this.agreeToPolicy = false;
      this.myForm.reset();
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
