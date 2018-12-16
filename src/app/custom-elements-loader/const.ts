import { InjectionToken } from '@angular/core';
import { ICustomElements, ICustomElementComponent } from './interface';

export const CUSTOM_ELEMENTS_TOKEN = new InjectionToken<ICustomElements[]>('custom-elements-loader.elements');
export const CUSTOM_ELEMENTS_COMPONENTS_TOKEN = new InjectionToken<ICustomElementComponent[]>('custom-elements-loader.elementsComponents');
