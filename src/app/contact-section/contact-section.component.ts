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

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // You can add your form submission logic here.
    // Access form data from this.formData.
    console.log('Form submitted with data:', this.formData);

    // You can also perform validation checks here if needed.
    // For example, you can check if any field is empty and display an error message.
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      // Display an error message or take appropriate action.
      console.log('Please fill in all required fields.');
      return;
    }

    // If all validation checks pass, you can proceed with form submission.
    // Example: Send data to a server.
  }
}
