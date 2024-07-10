import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // Signal
  clickCount = signal(0);
  // Convert signal to observable
  clickCount$ = toObservable(this.clickCount);

  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`);
    // });
  }


  ngOnInit() {

    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2),
    // ).subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => { }
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });

    this.clickCount$.subscribe({
      next: (val) => console.log(val),
    });

  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1)
  }

}