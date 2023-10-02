import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('myForm') myForm!: ElementRef
  @ViewChild('nameField')nameField!: ElementRef
  @ViewChild('emailField') emailField!: ElementRef
  @ViewChild('messageField') messageField!: ElementRef
  
  
   formData = {
    name: '',
    email: '',
    message: ''
  };
  agreeToPolicy: boolean = false


  async sendMail(){
    let nameField = this.nameField.nativeElement
    let emailField = this.emailField.nativeElement
    let messageField = this.messageField.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    /* Animation */
    let formData = new FormData();
    formData.append('name', nameField.value)
    formData.append('emailField', emailField.value)
    formData.append('messageField', messageField.value)

    await fetch('https://furkan-ayhan.developerakademie.net/send_mail/send_mail.php',  
    {
      method: 'POST',
      body: formData
    })
    .then()
    /* Text anzeigen Nachicht gesendet */
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
  }

}
