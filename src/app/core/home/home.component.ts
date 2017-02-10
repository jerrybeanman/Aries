import { HomeModule } from './home.module';
import {
        Component,
        OnInit }        from '@angular/core';

import { 
        Image,
        ImageService }  from './../../components';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  slideIndex;
  slideWrap;
  slideInterval;
  slidePause;
  slideNoTransition;
  extraSlides;

  private images: Image[]
  constructor(
      private imageService: ImageService
  ) {
    this.slideIndex = 1;
    this.slideWrap = true;
    this.slideInterval = 1500;
    this.slidePause = "hover";
    this.slideNoTransition = false;
    this.extraSlides = false;
  }

  ngOnInit() {
      this.images = this.imageService.getImages();
  }
  onIndexFieldChange(event) {
    this.slideIndex = event.target.value;
  }
  onIndexChange(newValue) {
    this.slideIndex = newValue;
  }
  onIntervalFieldChange(event) {
    this.slideInterval = event.target.value;
  }
  onWrapCheckboxChange(event) {
    this.slideWrap = event.target.checked;
  }
  onPauseCheckboxChange(event) {
    this.slidePause = event.target.checked ? "hover": "";
  }
  onAnimationCheckboxChange(event) {
    this.slideNoTransition = !event.target.checked;
  }
  onExtraCheckboxChange(event) {
    this.extraSlides = event.target.checked;
  }
  onSlideStart() {
    //console.log("Start sliding");
  }
  onSlideEnd() {
    //console.log("End sliding");
  }
}