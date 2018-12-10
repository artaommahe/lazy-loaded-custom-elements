import { ILazyLoadingWidgets } from '../widgets-loader/interface';
import { HELLO_WIDGET_SELECTOR, HI_WIDGET_SELECTOR } from './const';

export const GREETING_WIDGETS: ILazyLoadingWidgets = {
  modulePath: 'src/app/+greeting/module#GreetingModule',
  selectors: [
    HELLO_WIDGET_SELECTOR,
    HI_WIDGET_SELECTOR,
  ],
};
