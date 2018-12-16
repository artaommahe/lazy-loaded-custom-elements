import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeowwWidgetComponent } from './component/meoww/meoww';
import { WIDGETS_COMPONENTS_TOKEN } from '../widgets-loader/const';
import { ILazyLoadingWidgetComponent } from '../widgets-loader/interface';
import { MEOWW_WIDGET_SELECTOR, PURR_WIDGET_SELECTOR } from './const';
import { PurrWidgetComponent } from './component/purr/purr';

const WIDGETS_COMPONENTS: ILazyLoadingWidgetComponent[] = [
  { selector: MEOWW_WIDGET_SELECTOR, component: MeowwWidgetComponent },
  { selector: PURR_WIDGET_SELECTOR, component: PurrWidgetComponent, }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: WIDGETS_COMPONENTS_TOKEN, useValue: WIDGETS_COMPONENTS },
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
