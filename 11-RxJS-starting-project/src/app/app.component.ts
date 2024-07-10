import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

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
  interval$ = interval(1000);
  intervalSiginal = toSignal(this.interval$, { initialValue: 0 });

  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      // subscriber.error();
      if (timesExecuted === 5) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value');
      subscriber.next({ message: 'New Value' });
      timesExecuted++;
    })
  });
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

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
      error: (err) => console.log(err)
    });

    this.clickCount$.subscribe({
      next: (val) => console.log(val),
    });

  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1)
  }

}