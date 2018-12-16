import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_COMPONENTS_TOKEN } from '../custom-elements-loader/const';
import { ICustomElementComponent } from '../custom-elements-loader/interface';
import { WOOF_WIDGET_SELECTOR } from './const';
import { WoofWidgetComponent } from './component/woof/woof';

const WIDGETS_COMPONENTS: ICustomElementComponent[] = [
  { selector: WOOF_WIDGET_SELECTOR, component: WoofWidgetComponent }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: CUSTOM_ELEMENTS_COMPONENTS_TOKEN, useValue: WIDGETS_COMPONENTS },
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
