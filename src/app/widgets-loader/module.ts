import { NgModule, Injector, ModuleWithProviders, Inject, NgModuleFactoryLoader, SystemJsNgModuleLoader, NgModuleRef } from '@angular/core';
import { ILazyLoadingWidgets } from './interface';
import { WIDGETS_TOKEN, WIDGETS_COMPONENTS_TOKEN } from './const';
import sentinel from 'sentinel-js';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { createCustomElement } from '@angular/elements';

@NgModule({
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
})
export class WidgetsLoaderModule {
  public static forRoot(widgets: ILazyLoadingWidgets[]): ModuleWithProviders {
    return {
      ngModule: WidgetsLoaderModule,
      providers: [
        { provide: WIDGETS_TOKEN, useValue: widgets },
      ],
    };
  }

  constructor(
    private injector: Injector,
    @Inject(WIDGETS_TOKEN) private widgets: ILazyLoadingWidgets[],
    private ngModuleFactoryLoader: NgModuleFactoryLoader,
  ) {
    this.widgets.forEach(({ selectors, modulePath }) =>
      selectors.forEach(widgetSelector => {
        sentinel.on(widgetSelector, () => {
          sentinel.off(widgetSelector);

          this.ngModuleFactoryLoader.load(modulePath)
            .then(ngModuleFactory => ngModuleFactory.create(this.injector))
            .then(moduleRef => this.registerWidgetCustomElement(widgetSelector, moduleRef));
        });
      })
    );
  }

  private registerWidgetCustomElement(widgetSelector: string, moduleRef: NgModuleRef<any>): void {
    const injector = moduleRef.injector;

    const widgetsComponents = injector.get(WIDGETS_COMPONENTS_TOKEN);

    if (!widgetsComponents) {
      return;
    }

    const widgetComponent = widgetsComponents.find(({ selector }) => selector === widgetSelector);

    if (!widgetComponent) {
      return;
    }

    const strategyFactory = new ElementZoneStrategyFactory(widgetComponent.component, injector);
    const element = createCustomElement(widgetComponent.component, { injector, strategyFactory });

    customElements.define(widgetSelector, element);
  }
}
