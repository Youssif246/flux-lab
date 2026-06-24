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

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const img = card.querySelector('.material-img') as HTMLElement;
    const shine = card.querySelector('.card-glass-shine') as HTMLElement;
    if (!img) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    // Rotation angle thresholds (scale rotation based on cursor offset)
    const rotateY = (x - xc) / 6; 
    const rotateX = (yc - y) / -6;

    // Apply interactive transforms to the card image
    img.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.06)`;
    
    // Dynamic shadow direction shift (shadow shifts opposite of tilt to simulate physical light)
    img.style.filter = `drop-shadow(${-rotateY * 0.8}px ${20 + rotateX * 0.8}px 24px rgba(0, 0, 0, 0.22))`;

    // Dynamic light streak shift
    if (shine) {
      shine.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.06)`;
      shine.style.opacity = '1';
      const shinePercentX = (x / rect.width) * 100;
      const shinePercentY = (y / rect.height) * 100;
      shine.style.background = `radial-gradient(circle at ${shinePercentX}% ${shinePercentY}%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`;
    }
  }

  onMouseLeave(card: HTMLElement) {
    const img = card.querySelector('.material-img') as HTMLElement;
    const shine = card.querySelector('.card-glass-shine') as HTMLElement;
    if (!img) return;

    // Reset properties to default neutral layout smoothly
    img.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
    img.style.filter = `drop-shadow(0 10px 18px rgba(0, 0, 0, 0.15))`;
    
    if (shine) {
      shine.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
      shine.style.opacity = '0';
    }
  }
}
