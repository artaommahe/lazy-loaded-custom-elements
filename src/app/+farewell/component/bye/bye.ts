import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'bye-widget',
  template: `
    <div>
      Bye
      {{ counter$ | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByeComponent implements OnInit, OnDestroy {
  public counter$ = timer(0, 1000);

  public ngOnInit() {
    console.log('> ByeComponent: ngOnInit');
  }

  public ngOnDestroy() {
    console.log('> ByeComponent: ngOnDestroy');
  }
}
