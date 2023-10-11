import { Component } from '@angular/core';
  
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  imageUrl: string = '/assets/images/profile_no_bg.png';
}
