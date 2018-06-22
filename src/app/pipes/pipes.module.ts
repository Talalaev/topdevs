import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { GetMediaTypePipe } from './get-media-type.pipe';
import { GetMediaExpansionPipe } from './get-media-expansion.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SafeHtmlPipe, GetMediaTypePipe, GetMediaExpansionPipe],
  exports: [SafeHtmlPipe, GetMediaTypePipe, GetMediaExpansionPipe]
})
export class PipesModule { }
