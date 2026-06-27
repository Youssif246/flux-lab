import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css'
})
export class VideoPlayer implements AfterViewInit {
  isMuted = true;

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  toggleMute() {
    if (this.videoRef && this.videoRef.nativeElement) {
      const video = this.videoRef.nativeElement;
      video.muted = !video.muted;
      this.isMuted = video.muted;
    }
  }

  ngAfterViewInit() {
    // Ensure the video starts playing on load (some browsers require a play() call even when muted)
    const video = this.videoRef?.nativeElement;
    if (video) {
      video.loop = true;
      // Attempt to play; ignore promise rejection (browsers may block autoplay under certain policies)
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // Autoplay blocked; keep muted so user can unmute manually
          video.muted = true;
          this.isMuted = true;
        });
      }
    }
  }
}
