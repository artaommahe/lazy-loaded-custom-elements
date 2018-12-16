import { ICustomElements } from '../custom-elements-loader/interface';
import { MEOWW_WIDGET_SELECTOR, PURR_WIDGET_SELECTOR } from './const';

export const CATS_WIDGETS: ICustomElements = {
  modulePath: 'src/app/+cats/module#CatsModule',
  selectors: [
    MEOWW_WIDGET_SELECTOR,
    PURR_WIDGET_SELECTOR,
  ],
};
