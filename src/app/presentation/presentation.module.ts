import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

import { PresentationComponent } from './components/presentation/presentation.component';
import { PresentationService } from './services/presentation.service';
import { SlidesComponent } from './components/slides/slides.component';
import { SlideComponent } from './components/slide/slide.component';
import { ElementComponent } from './components/element/element.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [PresentationComponent, SlidesComponent, SlideComponent, ElementComponent],
  exports: [PresentationComponent],
  providers: [PresentationService]
})
export class PresentationModule { }
