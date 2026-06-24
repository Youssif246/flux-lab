import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-hero',
  imports: [NgFor],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

boxes: any[] = [
  {
    icon: 'fa-solid fa-globe',
    description: 'No App Required'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    description: 'Works on iPhone & Android'
  },
  {
    icon: 'fa-solid fa-rotate',
    description: 'Update Information Anytime'
  },
  {
    icon: 'fa-solid fa-infinity',
    description: 'Unlimited Sharing'
  },
  {
    icon: 'fa-solid fa-tag',
    description: 'One-Time Purchase'
  },
  {
    icon: 'fa-regular fa-leaf',
    description: 'Eco-Friendly'
  }
];

icons: any[] = [
  {
    icon: 'fa-brands fa-whatsapp',
    description: 'WhatsApp'
  },
  {
    icon: 'fa-solid fa-phone',
    description: 'Phone'
  },
  {
    icon: 'fa-solid fa-envelope',
    description: 'Email'
  },
  {
    icon: 'fa-solid fa-window-maximize',
    description: 'Website'
  },
  {
    icon: 'fa-brands fa-instagram',
    description: 'Instagram'
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    description: 'LinkedIn'
  },
  {
    icon: 'fa-regular fa-folder',
    description: 'Portfolio'
  },
  {
    icon: 'fa-solid fa-location-dot',
    description: 'Google Maps'
  },
  {
    icon: 'fa-regular fa-calendar',
    description: 'Booking Links'
  },
  {
    icon: 'fa-regular fa-map',
    description: 'Brochures Documents'
  },
  {
    icon: 'fa-regular fa-file-pdf',
    description: 'PDF Documents'
  },
  {
    icon: 'fa-regular fa-id-card',
    description: 'Digital Contact Card'
  }
];

cards: any[] = [
  {
    title: 'Restaurant Package',
    description: 'Increase reviews, simplify ordering, and keep customers connected.',
    image: 'images-4-removebg-preview.png',
    icons: [
      'fa-brands fa-google',
      'fa-solid fa-book-open',
      'fa-solid fa-wifi',
      'fa-brands fa-instagram'
    ]
  },
  {
    title: 'Beauty Salon Package',
    description: 'Generate more bookings and showcase your work.',
    image: 'images-6-removebg-preview.png',
    icons: [
      'fa-solid fa-calendar',
      'fa-brands fa-instagram',
      'fa-solid fa-list',
      'fa-brands fa-google'
    ]
  },
  {
    title: 'Clinic Package',
    description: 'Make appointments easier and improve patient trust.',
    image: 'images-1-removebg-preview.png',
    icons: [
      'fa-solid fa-clock',
      'fa-solid fa-phone-volume',
      'fa-solid fa-location-dot',
      'fa-brands fa-google'
    ]
  },
  {
    title: 'Real Estate Package',
    description: 'Showcase properties and capture leads instantly.',
    image: 'images-3-removebg-preview.png',
    icons: [
      'fa-solid fa-layer-group',
      'fa-brands fa-whatsapp',
      'fa-solid fa-location-dot',
      'fa-brands fa-google'
    ]
  },
  {
    title: 'Retail Store Package',
    description: 'Drive store visits and promote your latest products.',
    image: 'images-5-removebg-preview.png',
    icons: [
      'fa-solid fa-tag',
      'fa-solid fa-bag-shopping',
      'fa-solid fa-location-dot',
      'fa-brands fa-instagram'
    ]
  },
  {
    title: 'Corporate Package',
    description: 'Professional networking for modern teams.',
    image: 'images-2-removebg-preview.png',
    icons: [
      'fa-solid fa-user',
      'fa-solid fa-building',
      'fa-solid fa-id-card',
      'fa-brands fa-linkedin-in'
    ]
  }
];

}
