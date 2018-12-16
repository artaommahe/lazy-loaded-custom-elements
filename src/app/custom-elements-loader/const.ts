import { InjectionToken } from '@angular/core';
import { ILazyLoadedCustomElements, ILazyLoadedCustomElementComponent } from './interface';

export const CUSTOM_ELEMENTS_TOKEN = new InjectionToken<ILazyLoadedCustomElements[]>('custom-elements-loader.elements');
export const CUSTOM_ELEMENTS_COMPONENTS_TOKEN = new InjectionToken<ILazyLoadedCustomElementComponent[]>('custom-elements-loader.elementsComponents');
