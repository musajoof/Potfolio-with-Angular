import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'works', component: WorksComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
