import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-materials',
  imports: [NgFor],
  templateUrl: './materials.html',
  styleUrl: './materials.css',
})
export class Materials {
materials = [
  {
    name: 'Gold',
    image: 'gold-removebg-preview.png'
  },
  {
    name: 'Metal',
    image: 'metal-Picsart-AiImageEnhancer.png'
  },
  {
    name: 'Wood',
    image: 'wood-Picsart-AiImageEnhancer-removebg-preview.png'
  },
  {
    name: 'Plastic',
    image: 'plastic-Picsart-AiImageEnhancer-removebg-preview.png'
  },
  {
    name: 'Carbon Fiber',
    image: 'carbon-fiber-Picsart-AiImageEnhancer__1_-removebg-preview.png'
  },
  {
    name: 'Matte Black Premium',
    image: 'Matte-black-premium-removebg-preview.png'
  },
  {
    name: 'Transparent',
    image: 'transpernt-Picsart-AiImageEnhancer-removebg-preview.png'
  },
  {
    name: 'Glossy Finish',
    image: 'glossy-finish-Picsart-AiImageEnhancer-removebg-preview.png'
  },
  {
    name: 'Custom printed card',
    image: 'clostom-finish-Picsart-AiImageEnhancer-removebg-preview.png'
  },
  {
    name: 'Custom Finish',
    image: 'custom-printed-card-Picsart-AiImageEnhancer.png'
  }
];
features: any[] = [
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Contact Information'
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Social Media Accounts'
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Website'
  },
  {
    icon: 'fa-solid fa-folder',
    title: 'Portfolio'
  },
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Company Services'
  },
  {
    icon: 'fa-solid fa-file-lines',
    title: 'PDF Files & Brochures'
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Google Reviews'
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Business Location'
  }
];
}
