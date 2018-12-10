import { Type } from '@angular/core';

export interface ILazyLoadingWidgets {
  modulePath: string;
  selectors: string[];
}
export interface ILazyLoadingWidgetComponent {
  selector: string;
  component: Type<any>;
}
