import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PresentationModule } from './presentation/presentation.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PresentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
