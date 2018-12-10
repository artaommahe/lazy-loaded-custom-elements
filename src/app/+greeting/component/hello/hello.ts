import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'hello-widget',
  template: `
    <div>
      Hello
      {{ counter$ | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit, OnDestroy {
  public counter$ = timer(0, 1000);

  public ngOnInit() {
    console.log('> HelloComponent: ngOnInit');
  }

  public ngOnDestroy() {
    console.log('> HelloComponent: ngOnDestroy');
  }
}
