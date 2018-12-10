import { InjectionToken, Type } from '@angular/core';
import { ILazyLoadingWidgets, ILazyLoadingWidgetComponent } from './interface';

export const WIDGETS_TOKEN = new InjectionToken<ILazyLoadingWidgets[]>('widgets-loader.widgets');
export const WIDGETS_COMPONENTS_TOKEN = new InjectionToken<ILazyLoadingWidgetComponent[]>('widgets-loader.components');
