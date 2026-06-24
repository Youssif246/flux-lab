import { Component, AfterViewInit } from '@angular/core';
import { Loader } from '../loader/loader';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { VideoPlayer } from '../video-player/video-player';
import { Features } from '../features/features';
import { Share } from '../share/share';
import { BusinessPackages } from '../business-packages/business-packages';
import { Video } from '../video/video';
import { GoogleReviews } from '../google-reviews/google-reviews';
import { OneCard } from '../one-card/one-card';
import { Materials } from '../materials/materials';
import { Cta } from '../cta/cta';
import { Footer } from '../footer/footer';

@Component({
  standalone: true,
  selector: 'app-landing-page',
  imports: [
    Loader,
    Navbar,
    Hero,
    VideoPlayer,
    Features,
    Share,
    BusinessPackages,
    Video,
    GoogleReviews,
    OneCard,
    Materials,
    Cta,
    Footer
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements AfterViewInit {
  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }
}
