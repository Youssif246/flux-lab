import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css'
})
export class Loader implements OnInit {
  isVisible = true;
  isFadingOut = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Run the animation for 2.3 seconds, then start fading out
    setTimeout(() => {
      this.isFadingOut = true;
      this.cdr.detectChanges();
    }, 2300);

    // Completely destroy / remove the loader after fade-out transition completes (300ms later)
    setTimeout(() => {
      this.isVisible = false;
      this.cdr.detectChanges();
    }, 2600);
  }
}
