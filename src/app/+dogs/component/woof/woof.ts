import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import _ from 'lodash';

@Component({
  selector: 'woof-widget',
  template: `
    <div>
      Woof
      {{ counter$ | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WoofWidgetComponent implements OnInit, OnDestroy {
  public counter$ = timer(0, 1000).pipe(
    map(() => _.random(0, 100)),
  );

  public ngOnInit() {
    console.log('> WoofWidgetComponent: ngOnInit');
  }

  public ngOnDestroy() {
    console.log('> WoofWidgetComponent: ngOnDestroy');
  }
}
