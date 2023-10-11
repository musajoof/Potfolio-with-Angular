import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  htmlUrl: string = "/assets/images/html.svg"
  cssUrl: string = "/assets/images/brand-css3.svg"
  jsUrl: string = "/assets/images/brand-javascript.svg"
  boostrapUrl: string = "/assets/images/brand-bootstrap.svg"
  tailwindUrl: string = "/assets/images/brand-tailwind.svg"
  reactUrl: string = "/assets/images/brand-react.svg"
  nodeUrl: string = "/assets/images/brand-nodejs.svg"
  facebookUrl: string = "/assets/images/brand-facebook.svg"
  whatsappUrl: string = "/assets/images/brand-whatsapp.svg"
  twitterUrl: string = "/assets/images/brand-twitter.svg"
  linkedinUrl: string = "/assets/images/brand-linkedin.svg"
  mailUrl: string = "/assets/images/mail.svg"
  faxUrl: string = "/assets/images/phone.svg"
  phoneUrl: string = "/assets/images/device-landline-phone.svg"
}
