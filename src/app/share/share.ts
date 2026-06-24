import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share.html',
  styleUrl: './share.css'
})
export class Share {
  shareItems = [
    { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', color: '#25D366' },
    { icon: 'fa-solid fa-phone', label: 'Phone', color: '#007AFF' },
    { icon: 'fa-solid fa-envelope', label: 'Email', color: '#EA4335' },
    { icon: 'fa-solid fa-desktop', label: 'Website', color: '#1B1B1F' },
    { icon: 'fa-brands fa-instagram', label: 'Instagram', color: '#E1306C' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', color: '#0077B5' },
    { icon: 'fa-solid fa-folder-open', label: 'Portfolio', color: '#F4B400' },
    { icon: 'fa-solid fa-location-dot', label: 'Google Maps', color: '#4285F4' },
    { icon: 'fa-solid fa-calendar-days', label: 'Booking Links', color: '#0F9D58' },
    { icon: 'fa-solid fa-map', label: 'Brochures', color: '#FF5722' },
    { icon: 'fa-solid fa-file-pdf', label: 'PDFs', color: '#F44336' },
    { icon: 'fa-solid fa-address-card', label: 'Contact Card', color: '#8E44AD' }
  ];
}
