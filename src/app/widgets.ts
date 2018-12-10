import { ILazyLoadingWidgets } from './widgets-loader/interface';
import { GREETING_WIDGETS } from './+greeting/widget';
import { FAREWELL_WIDGETS } from './+farewell/widget';

export const WIDGETS: ILazyLoadingWidgets[] = [
  GREETING_WIDGETS,
  FAREWELL_WIDGETS,
];
