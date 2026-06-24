import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-google-reviews',
  imports: [NgFor],
  templateUrl: './google-reviews.html',
  styleUrl: './google-reviews.css',
})
export class GoogleReviews {
fetures: any[] = [
  {
    image:'stars.png',
    title:'Increase Reviews',
    description:'Make leaving reviews effortless'
  },
  {
    image:'insights.png',
    title:'Improve Business Visibility',
    description:'Rank higher and get discovered by more customers'
  },
  {
    image:'revies.png',
    title:'Build Customer Trust',
    description:'Turn satisfied customers into social proof'
  }
]
comparisonCards = [
  {
    title: 'Traditional Business Card',
    image: 'old-way.png',
    points: [
      'Easy to lose',
      'Limited information',
      'Requires reprinting',
      'Ongoing costs',
      'No interaction'
    ]
  },
  {
    title: 'FLUX Smart Card',
    image: 'new-way.png',
    points: [
      'Always available',
      'Unlimited information',
      'Instant updates',
      'One-time purchase',
      'Interactive experience'
    ]
  }
]
benefits = [
  {
    icon: 'fa-brands fa-apple',
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
