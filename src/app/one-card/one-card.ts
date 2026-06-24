import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-card.html',
  styleUrl: './one-card.css'
})
export class OneCard {
  comparisonCards = [
    {
      title: 'Traditional Business Card',
      image: 'old-way.png',
      isFlux: false,
      points: [
        'Easy to lose or damage',
        'Limited layout information',
        'Requires constant reprinting',
        'Costly recurring printing fees',
        'Static, non-interactive paper'
      ]
    },
    {
      title: 'FLUX Smart Card',
      image: 'new-way.png',
      isFlux: true,
      points: [
        'Always available on your phone',
        'Unlimited links & documents',
        'Instant profile updates in real-time',
        'One-time purchase, lifetime use',
        'Rich interactive customer experience'
      ]
    }
  ];

  benefits = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Custom Branding'
    },
    {
      icon: 'fa-solid fa-qrcode',
      title: 'QR Integration'
    },
    {
      icon: 'fa-solid fa-chart-simple',
      title: 'Analytics Tracking'
    },
    {
      icon: 'fa-regular fa-paper-plane',
      title: 'Lead Generation'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Secure Cloud Profile'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Multi-Language Support'
    }
  ];
}
