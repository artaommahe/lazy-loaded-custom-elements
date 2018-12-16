import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'meoww-widget',
  template: `
    <div>
      Meoww
      {{ counter$ | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeowwWidgetComponent implements OnInit, OnDestroy {
  public counter$ = timer(0, 1000);

  public ngOnInit() {
    console.log('> MeowwWidgetComponent: ngOnInit');
  }

  public ngOnDestroy() {
    console.log('> MeowwWidgetComponent: ngOnDestroy');
  }
}
