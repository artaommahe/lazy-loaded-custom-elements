import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WidgetsLoaderModule } from './widgets-loader/module';
import { WIDGETS } from './widgets';

@NgModule({
  imports: [
    BrowserModule,

    WidgetsLoaderModule.forRoot(WIDGETS),
  ],
})
export class AppModule {
  ngDoBootstrap() {
  }
}
