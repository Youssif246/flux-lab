import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { GoogleReviews } from "../google-reviews/google-reviews";
import { Materials } from "../materials/materials";

@Component({
  standalone:true,
  selector: 'app-landing-page',
  imports: [Hero, GoogleReviews, Materials],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
