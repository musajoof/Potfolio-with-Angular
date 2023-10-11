import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  htmlUrl: string = "/assets/images/html.png"
  cssUrl: string = "/assets/images/css.png"
  jsUrl: string = "/assets/images/js.png"
  boostrapUrl: string = "/assets/images/brand-bootstrap.svg"
  tailwindUrl: string = "/assets/images/brand-tailwind.svg"
  reactUrl: string = "/assets/images/brand-react.svg"
  nodeUrl: string = "/assets/images/brand-nodejs.svg"

  constructor(private router: Router) { }

  navigateToHero(): void {
    this.router.navigate(['/hero']);
  }
}
