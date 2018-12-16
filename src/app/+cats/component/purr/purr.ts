import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'purr-widget',
  template: `
    <div>
      Purr
      {{ counter$ | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurrWidgetComponent implements OnInit, OnDestroy {
  public counter$ = timer(0, 1000);

  public ngOnInit() {
    console.log('> PurrWidgetComponent: ngOnInit');
  }

  public ngOnDestroy() {
    console.log('> PurrWidgetComponent: ngOnDestroy');
  }
}
