import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  audioPlayerUrl: string = "/assets/works/Audio_player.png"
  faqUrl: string = "/assets/works/faq-card.png"
  jamagenFcUrl: string = "/assets/works/jamagen-fc.png"
  NftUrl: string = "/assets/works/large-screen-NFT-preveiw-card.png"
  percentageUrl: string = "/assets/works/percentage-calculator.png"
  potfolioUrl: string = "/assets/works/Potfolio-with-wailwind.png"
  qrcodeUrl: string = "/assets/works/qr-code-component.png"
  ratingUrl: string = "/assets/works/rating-component.png"
}
