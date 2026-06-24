import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-packages.html',
  styleUrl: './business-packages.css'
})
export class BusinessPackages {
  packages = [
    {
      title: 'Restaurant Package',
      description: 'Increase reviews, simplify ordering, and keep customers connected.',
      image: 'images-4-removebg-preview.png',
      tag: 'Food & Beverage',
      icons: [
        { name: 'fa-brands fa-google', label: 'Google Review' },
        { name: 'fa-solid fa-book-open', label: 'Digital Menu' },
        { name: 'fa-solid fa-wifi', label: 'Wi-Fi Connect' },
        { name: 'fa-brands fa-instagram', label: 'Instagram' }
      ]
    },
    {
      title: 'Beauty Salon Package',
      description: 'Generate more bookings and showcase your style and work portfolio.',
      image: 'images-6-removebg-preview.png',
      tag: 'Beauty & Wellness',
      icons: [
        { name: 'fa-solid fa-calendar', label: 'Easy Booking' },
        { name: 'fa-brands fa-instagram', label: 'Social Profile' },
        { name: 'fa-solid fa-list', label: 'Service List' },
        { name: 'fa-brands fa-google', label: 'Google Review' }
      ]
    },
    {
      title: 'Clinic Package',
      description: 'Make appointment booking easier and improve patient trust.',
      image: 'images-1-removebg-preview.png',
      tag: 'Healthcare',
      icons: [
        { name: 'fa-solid fa-clock', label: 'Schedule Appointment' },
        { name: 'fa-solid fa-phone-volume', label: 'Quick Call' },
        { name: 'fa-solid fa-location-dot', label: 'Location' },
        { name: 'fa-brands fa-google', label: 'Reviews' }
      ]
    },
    {
      title: 'Real Estate Package',
      description: 'Showcase dynamic properties and capture client leads instantly.',
      image: 'images-3-removebg-preview.png',
      tag: 'Real Estate & Agency',
      icons: [
        { name: 'fa-solid fa-layer-group', label: 'Listings' },
        { name: 'fa-brands fa-whatsapp', label: 'Direct Chat' },
        { name: 'fa-solid fa-location-dot', label: 'Office' },
        { name: 'fa-brands fa-google', label: 'Reviews' }
      ]
    },
    {
      title: 'Retail Store Package',
      description: 'Drive physical store visits and promote your latest products.',
      image: 'images-5-removebg-preview.png',
      tag: 'Retail & Fashion',
      icons: [
        { name: 'fa-solid fa-tag', label: 'Offers' },
        { name: 'fa-solid fa-bag-shopping', label: 'Online Store' },
        { name: 'fa-solid fa-location-dot', label: 'Map Address' },
        { name: 'fa-brands fa-instagram', label: 'Socials' }
      ]
    },
    {
      title: 'Corporate Package',
      description: 'Professional networking for modern enterprise teams.',
      image: 'images-2-removebg-preview.png',
      tag: 'Enterprise & B2B',
      icons: [
        { name: 'fa-solid fa-user', label: 'VCard Details' },
        { name: 'fa-solid fa-building', label: 'Company Info' },
        { name: 'fa-solid fa-id-card', label: 'Digital Profile' },
        { name: 'fa-brands fa-linkedin-in', label: 'LinkedIn' }
      ]
    }
  ];
}
