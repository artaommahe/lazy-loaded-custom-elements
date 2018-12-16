import { ILazyLoadingWidgets } from './widgets-loader/interface';
import { CATS_WIDGETS } from './+cats/widgets';
import { DOGS_WIDGETS } from './+dogs/widgets';

export const WIDGETS: ILazyLoadingWidgets[] = [
  CATS_WIDGETS,
  DOGS_WIDGETS,
];
