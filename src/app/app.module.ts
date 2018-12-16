import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomElementsLoaderModule } from './custom-elements-loader/module';
import { CUSTOM_ELEMENTS } from './widgets';

@NgModule({
  imports: [
    BrowserModule,

    CustomElementsLoaderModule.forRoot(CUSTOM_ELEMENTS),
  ],
})
export class AppModule {
  ngDoBootstrap() {
  }
}
