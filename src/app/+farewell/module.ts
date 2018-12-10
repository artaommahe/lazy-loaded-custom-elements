import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WIDGETS_COMPONENTS_TOKEN } from '../widgets-loader/const';
import { ILazyLoadingWidgetComponent } from '../widgets-loader/interface';
import { BYE_WIDGET_SELECTOR } from './const';
import { ByeComponent } from './component/bye/bye';

const WIDGETS_COMPONENTS: ILazyLoadingWidgetComponent[] = [
  { selector: BYE_WIDGET_SELECTOR, component: ByeComponent, }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: WIDGETS_COMPONENTS_TOKEN, useValue: WIDGETS_COMPONENTS },
  ],
  declarations: [
    ByeComponent,
  ],
  entryComponents: [
    ByeComponent,
  ],
})
export class FarewellModule {
  constructor(
  ) {
    console.log('> FarewellModule loaded');
  }
}
