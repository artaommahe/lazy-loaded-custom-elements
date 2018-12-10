import { ILazyLoadingWidgets } from '../widgets-loader/interface';
import { BYE_WIDGET_SELECTOR } from './const';

export const FAREWELL_WIDGETS: ILazyLoadingWidgets = {
  modulePath: 'src/app/+farewell/module#FarewellModule',
  selectors: [
    BYE_WIDGET_SELECTOR,
  ],
};
