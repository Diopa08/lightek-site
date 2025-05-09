import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_12po3ra',
      'template_pj1wve8',
      {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message
      },
      'rw0dVCcuw5w6DJdMW'
    ).then(() => {
      alert('Message envoyé ! ✅');
      this.form = { name: '', email: '', message: '' };
    }, (error) => {
      console.error(error);
      alert('Erreur lors de l’envoi ❌');
    });
  }
  

}
