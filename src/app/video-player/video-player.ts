import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css'
})
export class VideoPlayer {
  isMuted = true;

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  toggleMute() {
    if (this.videoRef && this.videoRef.nativeElement) {
      const video = this.videoRef.nativeElement;
      video.muted = !video.muted;
      this.isMuted = video.muted;
    }
  }
}
