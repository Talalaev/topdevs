import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit, OnChanges {
  @Input()
  slides: Array<Slide> = [];

  activeSlideindex = 0;

  constructor() { }

  ngOnChanges(values) {
    if (values.slides) {
      this.planeSlideMove();
    }
  }

  ngOnInit() {}

  planeSlideMove() {
    if (this.slides.length === 0) { return; }
    setTimeout(() => {
      console.log((this.activeSlideindex + 1) % this.slides.length);
      this.activeSlideindex = (this.activeSlideindex + 1) % this.slides.length;
      this.planeSlideMove();
    }, this.slides[this.activeSlideindex].delay * 1000);
  }
}
