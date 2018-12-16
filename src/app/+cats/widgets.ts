import { ILazyLoadingWidgets } from '../widgets-loader/interface';
import { MEOWW_WIDGET_SELECTOR, PURR_WIDGET_SELECTOR } from './const';

export const CATS_WIDGETS: ILazyLoadingWidgets = {
  modulePath: 'src/app/+cats/module#CatsModule',
  selectors: [
    MEOWW_WIDGET_SELECTOR,
    PURR_WIDGET_SELECTOR,
  ],
};
