import { Type } from '@angular/core';

export interface ICustomElements {
  modulePath: string;
  selectors: string[];
}

export interface ICustomElementComponent {
  selector: string;
  component: Type<any>;
}
