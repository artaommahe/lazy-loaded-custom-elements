import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WIDGETS_COMPONENTS_TOKEN } from '../widgets-loader/const';
import { ILazyLoadingWidgetComponent } from '../widgets-loader/interface';
import { WOOF_WIDGET_SELECTOR } from './const';
import { WoofWidgetComponent } from './component/woof/woof';

const WIDGETS_COMPONENTS: ILazyLoadingWidgetComponent[] = [
  { selector: WOOF_WIDGET_SELECTOR, component: WoofWidgetComponent }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: WIDGETS_COMPONENTS_TOKEN, useValue: WIDGETS_COMPONENTS },
  ],
  declarations: [
    WoofWidgetComponent,
  ],
  entryComponents: [
    WoofWidgetComponent,
  ],
})
export class DogsModule {
  constructor(
  ) {
    console.log('> DogsModule loaded');
  }
}
