import { Type } from '@angular/core';

export interface ILazyLoadedCustomElements {
  modulePath: string;
  selectors: string[];
}

export interface ILazyLoadedCustomElementComponent {
  selector: string;
  component: Type<any>;
}
