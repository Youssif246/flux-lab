import { Component, ChangeDetectorRef } from '@angular/core';
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

  constructor(private cd: ChangeDetectorRef) {}

  triggerTapSimulation() {
    if (this.isTapping) return;

    this.isProfileLoaded = false;
    this.isTapping = true;
    this.cd.detectChanges();

    // Phase 1: Card moves & NFC pulse activates.
    setTimeout(() => {
      this.isProfileLoaded = true;
      this.cd.detectChanges();
    }, 1100);

    // Phase 2: Reset card position after completion.
    setTimeout(() => {
      this.isTapping = false;
      this.cd.detectChanges();
    }, 2800);
  }

  resetSimulation() {
    this.isTapping = false;
    this.isProfileLoaded = false;
  }
}
