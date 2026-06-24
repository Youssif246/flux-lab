import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class Features {
  featuresList = [
    {
      icon: 'fa-solid fa-globe',
      title: 'No App Required',
      description: 'Interact instantly via web browser. No installation needed for recipients.'
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      title: 'iOS & Android Compatible',
      description: 'Works seamlessly across all modern smart devices with a simple tap.'
    },
    {
      icon: 'fa-solid fa-rotate',
      title: 'Update Anytime',
      description: 'Edit your details dynamically in the cloud without reprinting physical cards.'
    },
    {
      icon: 'fa-solid fa-infinity',
      title: 'Unlimited Sharing',
      description: 'Tap as many times as you like. There are no limits or caps on sharing.'
    },
    {
      icon: 'fa-solid fa-tag',
      title: 'One-Time Purchase',
      description: 'Own your card forever. Zero subscription fees, zero recurring costs.'
    },
    {
      icon: 'fa-solid fa-leaf',
      title: 'Eco-Friendly',
      description: 'Reduce paper waste. One smart card replaces thousands of paper cards.'
    }
  ];
}
