import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.html',
  styleUrl: './video.css'
})
export class Video {
  isTapping = false;
  isProfileLoaded = false;

  triggerTapSimulation() {
    if (this.isTapping) return;
    
    this.isTapping = true;
    this.isProfileLoaded = false;

    // Phase 1: Card moves & NFC pulse activates (1.2 seconds)
    setTimeout(() => {
      this.isProfileLoaded = true;
    }, 1100);

    // Phase 2: Reset card position after completion
    setTimeout(() => {
      this.isTapping = false;
    }, 2800);
  }

  resetSimulation() {
    this.isTapping = false;
    this.isProfileLoaded = false;
  }
}
