import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // Modern Destroy Method
  private destroyRef = inject(DestroyRef);

  // private interval?: NodeJS.Timeout;
  // Advanced TS
  // private interval?: ReturnType<typeof setTimeout>;

  constructor() {
    // Sets up a subscription to the currentStatus signal
    effect(() => {
      console.log('Server Status:', this.currentStatus());
    });

    // Might need to cleanup effect before it is run again.
    // effect((onCleanup) => {
    //   const tasks = getTasks();
    //   const timer = setTimeout(() => {
    //     console.log(`Current number of tasks: ${tasks().length}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd > 0.5) {
        this.currentStatus.set('online');
      } else if (rnd > 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    })
  }

  ngAfterViewInit() {
    console.log('ServerStatusComponent ngAfterViewInit');
  }

  // Old Destroy Method
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

}
