import { NgModule, Injector, ModuleWithProviders, Inject, NgModuleFactoryLoader, SystemJsNgModuleLoader, NgModuleRef } from '@angular/core';
import { ILazyLoadedCustomElements } from './interface';
import { CUSTOM_ELEMENTS_TOKEN, CUSTOM_ELEMENTS_COMPONENTS_TOKEN } from './const';
import sentinel from 'sentinel-js';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';

@NgModule({
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
})
export class CustomElementsLoaderModule {
  public static forRoot(customElements: ILazyLoadedCustomElements[]): ModuleWithProviders {
    return {
      ngModule: CustomElementsLoaderModule,
      providers: [
        { provide: CUSTOM_ELEMENTS_TOKEN, useValue: customElements },
      ],
    };
  }

  constructor(
    private injector: Injector,
    @Inject(CUSTOM_ELEMENTS_TOKEN) private customElements: ILazyLoadedCustomElements[],
    private ngModuleFactoryLoader: NgModuleFactoryLoader,
  ) {
    this.customElements.forEach(({ selectors, modulePath }) =>
      selectors.forEach(selector => {
        sentinel.on(selector, () => {
          sentinel.off(selector);

          this.ngModuleFactoryLoader.load(modulePath)
            .then(ngModuleFactory => ngModuleFactory.create(this.injector))
            .then(moduleRef => this.registerCustomElement(selector, moduleRef));
        });
      })
    );
  }

  private registerCustomElement(selector: string, moduleRef: NgModuleRef<any>): void {
    const injector = moduleRef.injector;

    const customElementsComponents = injector.get(CUSTOM_ELEMENTS_COMPONENTS_TOKEN);

    if (!customElementsComponents) {
      return;
    }

    const component = customElementsComponents.find(({ selector }) => selector === selector);

    if (!component) {
      return;
    }

    const strategyFactory = new ElementZoneStrategyFactory(component.component, injector);
    const element = createCustomElement(component.component, { injector, strategyFactory });

    customElements.define(selector, element);
  }
}
