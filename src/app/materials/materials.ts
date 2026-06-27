import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.html',
  styleUrl: './materials.css',
})
export class Materials {
materials = [
  {
    name: 'Gold',
    image: 'gold.webp'
  },
  {
    name: 'Matte Black Premium',
    image: 'matte-black-premium.webp'
  },
  {
    name: 'Transparent',
    image: 'transparent.webp'
  },
  {
    name: 'Wood',
    image: 'wood.webp'
  },
  {
    name: 'Glossy Finish',
    image: 'glossy-finish.webp'
  },

  {
    name: 'Metal',
    image: 'metal.webp'
  },
  {
    name: 'Carbon Fiber',
    image: 'carbon-fiber.webp'
  },
  {
    name: 'Custom Printed Card',
    image: 'custom-printed-card.webp'
  },
  {
    name: 'Plastic',
    image: 'plastic.webp'
  },
  {
    name: 'Custom Finish',
    image: 'custom-fnish.webp'
  }
];
}
