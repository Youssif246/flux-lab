import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-reviews.html',
  styleUrl: './google-reviews.css',
})
export class GoogleReviews {
  fetures = [
    {
      image: 'stars.png',
      title: 'Increase Reviews',
      description: 'Make leaving reviews effortless'
    },
    {
      image: 'insights.png',
      title: 'Improve Business Visibility',
      description: 'Rank higher and get discovered by more customers'
    },
    {
      image: 'revies.png',
      title: 'Build Customer Trust',
      description: 'Turn satisfied customers into social proof'
    }
  ];
}
