import { ILazyLoadedCustomElements } from './custom-elements-loader/interface';
import { CATS_WIDGETS } from './+cats/widgets';
import { DOGS_WIDGETS } from './+dogs/widgets';

export const CUSTOM_ELEMENTS: ILazyLoadedCustomElements[] = [
  CATS_WIDGETS,
  DOGS_WIDGETS,
];
