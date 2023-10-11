import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  imageUrl: string = '/assets/images/profile_no_bg.png';
  logoUrl: string = '/assets/images/my_logo.jpg';
  profileUrl: string = '/assets/images/profile_no_bg.png';
}
