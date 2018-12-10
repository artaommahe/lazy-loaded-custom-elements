import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'hi-widget',
  template: `
    <div>
      Hi
      {{ counter$ | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiComponent implements OnInit, OnDestroy {
  public counter$ = timer(0, 1000);

  public ngOnInit() {
    console.log('> HiComponent: ngOnInit');
  }

  public ngOnDestroy() {
    console.log('> HiComponent: ngOnDestroy');
  }
}
