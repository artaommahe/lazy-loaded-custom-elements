import { ILazyLoadingWidgets } from '../widgets-loader/interface';
import { WOOF_WIDGET_SELECTOR } from './const';

export const DOGS_WIDGETS: ILazyLoadingWidgets = {
  modulePath: 'src/app/+dogs/module#DogsModule',
  selectors: [
    WOOF_WIDGET_SELECTOR,
  ],
};
