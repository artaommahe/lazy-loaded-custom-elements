import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeowwWidgetComponent } from './component/meoww/meoww';
import { CUSTOM_ELEMENTS_COMPONENTS_TOKEN } from '../custom-elements-loader/const';
import { ICustomElementComponent } from '../custom-elements-loader/interface';
import { MEOWW_WIDGET_SELECTOR, PURR_WIDGET_SELECTOR } from './const';
import { PurrWidgetComponent } from './component/purr/purr';

const WIDGETS_COMPONENTS: ICustomElementComponent[] = [
  { selector: MEOWW_WIDGET_SELECTOR, component: MeowwWidgetComponent },
  { selector: PURR_WIDGET_SELECTOR, component: PurrWidgetComponent, }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: CUSTOM_ELEMENTS_COMPONENTS_TOKEN, useValue: WIDGETS_COMPONENTS },
  ],
  declarations: [
    MeowwWidgetComponent,
    PurrWidgetComponent,
  ],
  entryComponents: [
    MeowwWidgetComponent,
    PurrWidgetComponent,
  ],
})
export class CatsModule {
  constructor(
  ) {
    console.log('> CatsModule loaded');
  }
}
