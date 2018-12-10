import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './component/hello/hello';
import { WIDGETS_COMPONENTS_TOKEN } from '../widgets-loader/const';
import { ILazyLoadingWidgetComponent } from '../widgets-loader/interface';
import { HELLO_WIDGET_SELECTOR, HI_WIDGET_SELECTOR } from './const';
import { HiComponent } from './component/hi/hi';

const WIDGETS_COMPONENTS: ILazyLoadingWidgetComponent[] = [
  { selector: HELLO_WIDGET_SELECTOR, component: HelloComponent },
  { selector: HI_WIDGET_SELECTOR, component: HiComponent, }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: WIDGETS_COMPONENTS_TOKEN, useValue: WIDGETS_COMPONENTS },
  ],
  declarations: [
    HelloComponent,
    HiComponent,
  ],
  entryComponents: [
    HelloComponent,
    HiComponent,
  ],
})
export class GreetingModule {
  constructor(
  ) {
    console.log('> GreetingModule loaded');
  }
}
