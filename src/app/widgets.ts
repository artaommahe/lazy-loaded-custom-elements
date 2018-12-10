import { ILazyLoadingWidgets } from './widgets-loader/interface';
import { GREETING_WIDGETS } from './+greeting/widget';

export const WIDGETS: ILazyLoadingWidgets[] = [
  GREETING_WIDGETS,
];
